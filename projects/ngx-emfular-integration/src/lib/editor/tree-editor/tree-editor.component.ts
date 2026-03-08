import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Referencable} from "emfular";
import {FileLevelBarComponent} from "../file-level-bar/file-level-bar.component";
import {ModelEditingBarComponent} from "../model-editing-bar/model-editing-bar.component";
import {ModelService} from "../../model.service";
import {ModelCanvasComponent} from "../model-canvas/model-canvas.component";

@Component({
  selector: 'emfular-tree-editor',
    imports: [
        FileLevelBarComponent,
        ModelEditingBarComponent,
        ModelCanvasComponent
    ],
  templateUrl: './tree-editor.component.html',
  styleUrl: './tree-editor.component.css'
})
export class TreeEditorComponent<M extends Referencable<any>> {
    svgElement!: SVGSVGElement;
    @Input() modelService!: ModelService<M>
    @Input() customButtons: Array<{
      label: string;
      icon?: string;
      action: () => void;
    }> | null = null;

    @Output() chooseElement: EventEmitter<Referencable<any>> = new EventEmitter();

    constructor() {}

  get sidebarButtons() {
      if (this.customButtons) return this.customButtons;
      else       //todo replace by default create buttons
          return[{label: "test", action: () => {console.log("Button on model edition works")}}];
  }

  onSvgReady(svg: SVGSVGElement) {
    this.svgElement = svg;
  }

  choose(element: Referencable<any>) {
      this.chooseElement.emit(element);
  }
}
