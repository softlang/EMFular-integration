import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import { Referencable} from "emfular";
import {FileLevelBarComponent} from "../editor/file-level-bar/file-level-bar.component";
import {ModelEditingBarComponent} from "../editor/model-editing-bar/model-editing-bar.component";
import {ReferencableBoxComponent} from "../referencable-box/referencable-box.component";
import {BoundingBox} from "svg-graphics";
import {ModelService} from "../model.service";

@Component({
  selector: 'emfular-tree-editor',
    imports: [
        FileLevelBarComponent,
        ModelEditingBarComponent,
        ReferencableBoxComponent
    ],
  templateUrl: './tree-editor.component.html',
  styleUrl: './tree-editor.component.css'
})
export class TreeEditorComponent<M extends Referencable<any>> {

  @ViewChild('svg', { static: true }) svg!: ElementRef<SVGElement>;
  @Input() customButtons: Array<{
      label: string;
      icon?: string;
      action: () => void;
  }> | null = null;
  initialBBox : BoundingBox = {x: 0, y: 20, w: 50, h: 25}

  constructor(
      public modelService: ModelService<M>,
      ) {}

  get sidebarButtons() {
      if (this.customButtons) return this.customButtons;
      else       //todo replace by default create buttons
          return[{label: "test", action: () => {console.log("Button on model edition works")}}];
  }

    protected readonly Referencable = Referencable;
}
