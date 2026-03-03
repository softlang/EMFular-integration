import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ModelService} from "ngx-emfular-integration";
import { Referencable} from "emfular";
import {FileLevelBarComponent} from "../editor/file-level-bar/file-level-bar.component";
import {ModelEditingBarComponent} from "../editor/model-editing-bar/model-editing-bar.component";

@Component({
  selector: 'emfular-tree-editor',
    imports: [
        FileLevelBarComponent,
        ModelEditingBarComponent
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

  constructor(
      public modelService: ModelService<M>,
      ) {}

  get sidebarButtons() {
      if (this.customButtons) return this.customButtons;
      else       //todo replace by default create buttons
          return[{label: "test", action: () => {console.log("Button on model edition works")}}];
  }

}
