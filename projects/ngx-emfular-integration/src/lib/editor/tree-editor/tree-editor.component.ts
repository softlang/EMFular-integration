import {Component, Input} from '@angular/core';
import { Referencable} from "emfular";
import {FileLevelBarComponent} from "../file-level-bar/file-level-bar.component";
import {ModelEditingBarComponent} from "../model-editing-bar/model-editing-bar.component";
import {ModelService} from "../../model.service";
import {ModelCanvasComponent} from "../model-canvas/model-canvas.component";
import {ModelDetailsService} from "../../details/model-details-service";
import {BasicModelDetailsService} from "../../details/basic-model-details.service";

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
    @Input() detailsService?: ModelDetailsService<M>
    @Input() customButtons: Array<{
      label: string;
      icon?: string;
      action: () => void;
    }> | null = null;

    constructor(private basicDetailsService: BasicModelDetailsService<M>) {}

    get sidebarButtons() {
      if (this.customButtons) return this.customButtons;
      else       //todo replace by default create buttons
          return[{label: "test", action: () => {console.log("Button on model edition works")}}];
    }

    get effectiveDetailsService(): ModelDetailsService<M> {
        return this.detailsService ?? this.basicDetailsService;
    }

    onSvgReady(svg: SVGSVGElement) {
        this.svgElement = svg;
    }

    choose(element: Referencable<any>) {
      this.effectiveDetailsService.openDetails(element, this.modelService)
    }
}
