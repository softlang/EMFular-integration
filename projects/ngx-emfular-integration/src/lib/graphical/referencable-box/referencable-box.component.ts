import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  inject,
} from "@angular/core";
import { Referencable, ReTreeChildrenContainer } from "emfular";
import {
  ArrowBetweenElemsComponent,
  BoundingBox,
  RectangleWithTextComponent,
  PositionHelper,
} from "ngx-svg-graphics";
import { GraphicalHelper } from "../../utils/graphical-helper";
import { IdHelper } from "../../utils/id-helper";
import { VisibleNodeRegistry } from "../../editor/merged-tree-relations-canvas/services/visible-node-registry.service";
import { SVGAccessService } from "ngx-svg-graphics";

@Component({
  selector: "[referencable-box]",
  imports: [RectangleWithTextComponent, ArrowBetweenElemsComponent],
  templateUrl: "./referencable-box.component.svg",
  styleUrl: "./referencable-box.component.css",
})
export class ReferencableBoxComponent implements OnChanges, OnDestroy {
  @Input() referencable!: Referencable<any>;
  @Input() position!: BoundingBox;
  @Input() color?: string = "#efad78";
  @Output() chooseElement: EventEmitter<Referencable<any>> = new EventEmitter();
  @Output() chooseReference: EventEmitter<ReTreeChildrenContainer<any>> =
    new EventEmitter();

  isExpandedArray: boolean[] = [];

  private registry: VisibleNodeRegistry | null = inject(VisibleNodeRegistry, {
    optional: true,
  });
  private svgAccessService = inject(SVGAccessService);
  private activeSvg: SVGSVGElement | null = null;

  isDragging = false;
  dragOffsetX = 0;
  dragOffsetY = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.registerSelf();
  }

  ngOnDestroy(): void {
    const id = this.referencable?.$gId;
    if (id && this.registry) {
      this.registry.remove(id);
    }

    window.removeEventListener("mousemove", this.onDragMove);
    window.removeEventListener("mouseup", this.onDragEnd);
  }

  private registerSelf(): void {
    const id = this.referencable?.$gId;
    if (!id || !this.position) {
      return;
    }

    if (this.registry) {
      this.registry.setBox(id, this.position);
    }

    this.notifyOwnAndReferencePositionsChange();
  }

  toggleExpand(i: number) {
    this.isExpandedArray[i] = !this.isExpandedArray[i];

  }

  createBoxInLastPart(bb: BoundingBox): BoundingBox {
    return {
      x: bb.x + bb.w - 25,
      y: bb.y + bb.h - 25,
      w: 25,
      h: 25,
    };
  }

  choose(element: Referencable<any>) {
    this.chooseElement.emit(element);
  }

  chooseRef(ref: ReTreeChildrenContainer<any>) {
    this.chooseReference.emit(ref);
  }

  getResolvedChildPosition(
    child: Referencable<any>,
    fallback: BoundingBox,
  ): BoundingBox {
    const id = child?.$gId;
    if (!id || !this.registry) {
      return fallback;
    }

    return this.registry.resolvePosition(id, fallback);
  }

  private getSvgPoint(event: MouseEvent): { x: number; y: number } | null {
    const svg = this.activeSvg;
    if (!svg) {
      return null;
    }

    const point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;

    const ctm = svg.getScreenCTM();
    if (!ctm) {
      return null;
    }

    const transformed = point.matrixTransform(ctm.inverse());
    return { x: transformed.x, y: transformed.y };
  }

  private notifyOwnAndReferencePositionsChange(): void {
    const ownId = this.referencable?.$gId;
    if (!ownId) {
      return;
    }

    this.svgAccessService.notifyPositionChange(ownId);

    for (const container of this.referencable.$treeChildren ?? []) {
      const containerKey = ownId + "_" + container.referenceName;
      this.svgAccessService.notifyPositionChange(containerKey);
    }
  }

  startDrag(event: MouseEvent): void {
    if (!this.referencable?.$gId || !this.position) {
      return;
    }

    const target = event.target as SVGGraphicsElement | null;
    this.activeSvg = target?.ownerSVGElement ?? null;
    if (!this.activeSvg) {
      return;
    }

    const svgPoint = this.getSvgPoint(event);
    if (!svgPoint) {
      return;
    }

    event.stopPropagation();
    event.preventDefault();

    this.isDragging = true;
    this.dragOffsetX = svgPoint.x - this.position.x;
    this.dragOffsetY = svgPoint.y - this.position.y;

    window.addEventListener("mousemove", this.onDragMove);
    window.addEventListener("mouseup", this.onDragEnd);
  }

  onDragMove = (event: MouseEvent): void => {
    if (!this.isDragging || !this.referencable?.$gId) {
      return;
    }

    const svgPoint = this.getSvgPoint(event);
    if (!svgPoint) {
      return;
    }

    const nextX = svgPoint.x - this.dragOffsetX;
    const nextY = svgPoint.y - this.dragOffsetY;

    const nextBox: BoundingBox = {
      ...this.position,
      x: nextX,
      y: nextY,
    };

    this.position = nextBox;

    if (this.registry) {
      this.registry.setDraggedBox(this.referencable.$gId, nextBox);
    }

    this.notifyOwnAndReferencePositionsChange();
  };

  onDragEnd = (): void => {
    this.isDragging = false;
    this.activeSvg = null;

    this.notifyOwnAndReferencePositionsChange();

    window.removeEventListener("mousemove", this.onDragMove);
    window.removeEventListener("mouseup", this.onDragEnd);
  };

  protected readonly GraphicalHelper = GraphicalHelper;
  protected readonly PositionHelper = PositionHelper;
  protected readonly IdHelper = IdHelper;
}
