import {Component, Input} from '@angular/core';
import { Referencable} from "emfular";
import {ModelEditingBarComponent} from "../model-editing-bar/model-editing-bar.component";
import {ModelService} from "../../model.service";
import {TreeDetailsService} from "../../details/tree-details-service";
import {TreeModelDetailsService} from "../../details/tree-model-details.service";
import {EditButtonDef} from "../edit-button-def";
import {BasicEditorComponent} from "../basic-editor/basic-editor.component";
import {ReferencableBoxComponent} from "../../graphical/referencable-box/referencable-box.component";
import { BoundingBox } from 'ngx-svg-graphics';

@Component({
  selector: 'emfular-tree-editor',
    imports: [
        ModelEditingBarComponent,
        BasicEditorComponent,
        ReferencableBoxComponent
    ],
  templateUrl: './tree-editor.component.html',
  styleUrl: './tree-editor.component.css'
})
export class TreeEditorComponent<M extends Referencable<any>> {
    @Input() modelService!: ModelService<M>
    @Input() detailsService?: TreeDetailsService<M>
    @Input() customButtons: Array<EditButtonDef> | null = null;
    svgwidth = 1500;
    svgheigth = 1000;
    initialBBox : BoundingBox = {x: this.svgwidth/2, y: 20, w: 200, h: 25}


    constructor(private basicDetailsService: TreeModelDetailsService<M>) {}

    get sidebarButtons() {
      if (this.customButtons) return this.customButtons;
      else       //todo replace by default create buttons
          return[{label: "test", action: () => {console.log("Button on model edition works")}}];
    }

    get effectiveDetailsService(): TreeDetailsService<M> {
        return this.detailsService ?? this.basicDetailsService;
    }

    choose(element: Referencable<any>) {
      this.effectiveDetailsService.openDetails(element, this.modelService)
    }
}
