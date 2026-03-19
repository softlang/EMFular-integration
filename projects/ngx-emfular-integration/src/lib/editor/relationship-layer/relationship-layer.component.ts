import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  inject,
} from "@angular/core";
import { Subscription, auditTime, animationFrameScheduler } from "rxjs";
import { Referencable } from "emfular";
import { BoundingBox } from "ngx-svg-graphics";
import { VisibleNodeRegistry } from "../merged-tree-relations-canvas/services/visible-node-registry.service";

interface EdgeVM {
  id: string;
  label: string;
  sourceId: string;
  targetId: string;
  points: string;
  labelX: number;
  labelY: number;
}

@Component({
  selector: "[relationship-layer]",
  templateUrl: "./relationship-layer.component.html",
  styleUrl: "./relationship-layer.component.css",
})
export class RelationshipLayerComponent implements OnChanges, OnInit, OnDestroy {
  @Input() rootElement?: Referencable<any>;
  @Input() showRelationships = false;

  edges: EdgeVM[] = [];

  private registry = inject(VisibleNodeRegistry, { optional: true });
  private sub?: Subscription;

  ngOnInit(): void {
    this.sub = this.registry?.changes$
        .pipe(auditTime(0, animationFrameScheduler))
        .subscribe(() => {
            if (this.showRelationships) {
            this.rebuildEdges();
            }
        });

    if (this.showRelationships) {
      queueMicrotask(() => this.rebuildEdges());
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.showRelationships) {
      this.edges = [];
      return;
    }

    queueMicrotask(() => this.rebuildEdges());
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  rebuildEdges(): void {
    if (!this.rootElement || !this.registry || !this.showRelationships) {
      this.edges = [];
      return;
    }

    const elements = this.collectElements(this.rootElement);

    const rawEdges: Array<{
      sourceId: string;
      targetId: string;
      label: string;
    }> = [];

    for (const src of elements) {
      const sid = this.getGId(src);
      if (!sid) continue;

      const other = (src as any)?.$otherReferences;
      if (!Array.isArray(other)) continue;

      for (const c of other) {
        const label = c?.referenceName ?? "ref";
        const targets = this.asArray(c?.get?.());

        for (const t of targets) {
          if (!this.isReferencable(t)) continue;

          const tid = this.getGId(t);
          if (!tid) continue;

          const sb = this.registry.getBox(sid);
          const tb = this.registry.getBox(tid);

          // Nur sichtbare Knoten verbinden
          if (!sb || !tb) continue;

          rawEdges.push({ sourceId: sid, targetId: tid, label });
        }
      }
    }

    const grouped = new Map<string, typeof rawEdges>();

    for (const e of rawEdges) {
      const key = `${e.sourceId}::${e.targetId}`;
      if (!grouped.has(key)) grouped.set(key, []);
      grouped.get(key)!.push(e);
    }

    const routed: EdgeVM[] = [];

    for (const [, list] of grouped.entries()) {
      const first = list[0];
      const sb = this.registry.getBox(first.sourceId);
      const tb = this.registry.getBox(first.targetId);
      if (!sb || !tb) continue;

      const geom = this.routeEdge(sb, tb);
      const mergedLabel = [...new Set(list.map((e) => e.label))].join(" / ");

      routed.push({
        id: `${first.sourceId}_${first.targetId}`,
        label: mergedLabel,
        sourceId: first.sourceId,
        targetId: first.targetId,
        points: geom.points,
        labelX: geom.labelX,
        labelY: geom.labelY,
      });
    }

    this.edges = routed;
  }

  private collectElements(root: Referencable<any>): Referencable<any>[] {
    const result: Referencable<any>[] = [];
    const seen = new Set<string>();
    const stack: Referencable<any>[] = [root];

    while (stack.length > 0) {
      const current = stack.pop()!;
      const gid = this.getGId(current);
      if (!gid || seen.has(gid)) continue;

      seen.add(gid);
      result.push(current);

      const tc = (current as any)?.$treeChildren;
      if (Array.isArray(tc)) {
        for (const container of tc) {
          const items = this.asArray(container?.get?.());
          for (const it of items) {
            if (this.isReferencable(it)) {
              stack.push(it);
            }
          }
        }
      }
    }

    return result;
  }

  private routeEdge(
    source: BoundingBox,
    target: BoundingBox,
  ): { points: string; labelX: number; labelY: number } {
    const srcCenter = {
      x: source.x + source.w / 2,
      y: source.y + source.h / 2,
    };
    const tgtCenter = {
      x: target.x + target.w / 2,
      y: target.y + target.h / 2,
    };

    const dx = tgtCenter.x - srcCenter.x;
    const dy = tgtCenter.y - srcCenter.y;

    let start: { x: number; y: number };
    let end: { x: number; y: number };
    let mid1: { x: number; y: number };
    let mid2: { x: number; y: number };

    if (Math.abs(dx) >= Math.abs(dy)) {
      start =
        dx >= 0
          ? { x: source.x + source.w, y: srcCenter.y }
          : { x: source.x, y: srcCenter.y };
      end =
        dx >= 0
          ? { x: target.x, y: tgtCenter.y }
          : { x: target.x + target.w, y: tgtCenter.y };

      const mx = (start.x + end.x) / 2;
      mid1 = { x: mx, y: start.y };
      mid2 = { x: mx, y: end.y };
    } else {
      start =
        dy >= 0
          ? { x: srcCenter.x, y: source.y + source.h }
          : { x: srcCenter.x, y: source.y };
      end =
        dy >= 0
          ? { x: tgtCenter.x, y: target.y }
          : { x: tgtCenter.x, y: target.y + target.h };

      const my = (start.y + end.y) / 2;
      mid1 = { x: start.x, y: my };
      mid2 = { x: end.x, y: my };
    }

    const pts = [start, mid1, mid2, end];
    const points = pts.map((p) => `${Math.round(p.x)},${Math.round(p.y)}`).join(" ");

    const labelX = (mid2.x + end.x) / 2;
    const labelY = (mid2.y + end.y) / 2 - 6;

    return { points, labelX, labelY };
  }

  private getGId(elem: any): string | undefined {
    const gid = elem?.$gId;
    return typeof gid === "string" && gid.length > 0 ? gid : undefined;
  }

  private isReferencable(x: any): x is Referencable<any> {
    return x && typeof x === "object" && typeof x.$gId === "string";
  }

  private asArray<T>(value: T | T[] | undefined | null): T[] {
    if (value === undefined || value === null) return [];
    return Array.isArray(value) ? value : [value];
  }
}