import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { Referencable } from "emfular";
import { ModelEditingBarComponent } from "../model-editing-bar/model-editing-bar.component";
import { ModelService } from "../../model.service";
import { TreeDetailsService } from "../../details/tree-details-service";
import { TreeModelDetailsService } from "../../details/tree-model-details.service";
import { EditButtonDef } from "../edit-button-def";
import { BasicEditorComponent } from "../basic-editor/basic-editor.component";
import { ReferencableBoxComponent } from "../../graphical/referencable-box/referencable-box.component";
import { BoundingBox } from "ngx-svg-graphics";
import { VisibleNodeRegistry } from "../merged-tree-relations-canvas/services/visible-node-registry.service";
import { RelationshipLayerComponent } from "../relationship-layer/relationship-layer.component";

@Component({
  selector: "emfular-tree-editor",
  standalone: true,
  imports: [
    ModelEditingBarComponent,
    BasicEditorComponent,
    ReferencableBoxComponent,
    RelationshipLayerComponent,
  ],
  providers: [VisibleNodeRegistry],
  templateUrl: "./tree-editor.component.html",
  styleUrl: "./tree-editor.component.css",
})
export class TreeEditorComponent<M extends Referencable<any>>
  implements OnInit, OnChanges
{
  @Input() modelService!: ModelService<M>;
  @Input() detailsService?: TreeDetailsService<M>;
  @Input() customButtons: Array<EditButtonDef> | null = null;

  svgwidth = 1500;
  svgheigth = 1000;
  initialBBox: BoundingBox = { x: this.svgwidth / 2, y: 20, w: 200, h: 25 };

  showRelationships = false;
  sidebarButtons: Array<EditButtonDef> = [];

  constructor(
    private basicDetailsService: TreeModelDetailsService<M>,
    private visibleNodeRegistry: VisibleNodeRegistry,
  ) {}

  ngOnInit(): void {
    this.rebuildSidebarButtons();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["customButtons"]) {
      this.rebuildSidebarButtons();
    }
  }

  private rebuildSidebarButtons(): void {
    const relationshipButton: EditButtonDef = {
      label: this.showRelationships
        ? "Hide Relationships"
        : "Show Relationships",
      action: () => this.toggleRelationships(),
    };

    this.sidebarButtons = this.customButtons
      ? [...this.customButtons, relationshipButton]
      : [relationshipButton];
  }

  get effectiveDetailsService(): TreeDetailsService<M> {
    return this.detailsService ?? this.basicDetailsService;
  }

  choose(element: Referencable<any>) {
    this.effectiveDetailsService.openDetails(element, this.modelService);
  }

  toggleRelationships(): void {
    this.showRelationships = !this.showRelationships;
    this.rebuildSidebarButtons();
  }
}
