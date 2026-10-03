import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Referencable} from "emfular-core";
import {ModelEditingBarComponent} from "../../creation-palettes/model-editing-bar/model-editing-bar.component";
import {ModelService} from "../../../model.service";
import {DetailsService} from "../../../details/details-service";
import {GraphicalTreeDetailsService} from "../../../details/graphical-tree-details.service";
import {EditButtonDef} from "../../creation-palettes/edit-button-def";
import {BasicEditorComponent} from "../basic-editor/basic-editor.component";
import {TreeModelElementComponent} from "../../../graphical/tree-model-element/tree-model-element.component";
import { BoundingBox } from 'ngx-emfular-diagram';

@Component({
  selector: 'emfular-tree-editor',
    imports: [
        ModelEditingBarComponent,
        BasicEditorComponent,
        TreeModelElementComponent
    ],
  templateUrl: './tree-editor.component.html',
  styleUrl: './tree-editor.component.css'
})
export class TreeEditorComponent<M extends Referencable<any>> implements OnChanges {
    @Input() modelService!: ModelService<M>
    @Input() detailsService?: DetailsService<M>
    @Input() customButtons: EditButtonDef[] = [];
    @Input() svgwidth = 1500;
    @Input() svgheight = 1000;
    initialBBox : BoundingBox = {x: this.svgwidth/2-100, y: 20, w: 200, h: 50}


    constructor(private basicDetailsService: GraphicalTreeDetailsService<M>) {}

    ngOnChanges(changes: SimpleChanges) {
        if(changes.svgwidth|| changes.svgheight) {
            this.initialBBox.x = this.svgwidth/2-100;
        }
    }

    get sidebarButtons() {
      if (this.customButtons) return this.customButtons;
      else       //todo replace by default create buttons
          return[{label: "test", action: () => {console.log("Button on model edition works")}}];
    }

    get effectiveDetailsService(): DetailsService<M> {
        return this.detailsService ?? this.basicDetailsService;
    }

    choose(element: Referencable<any>) {
      this.effectiveDetailsService.openDetails(element, this.modelService)
    }
}
