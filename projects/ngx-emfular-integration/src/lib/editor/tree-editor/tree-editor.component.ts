import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { Referencable} from "emfular";
import {FileLevelBarComponent} from "../file-level-bar/file-level-bar.component";
import {ModelEditingBarComponent} from "../model-editing-bar/model-editing-bar.component";
import {ReferencableBoxComponent} from "../../graphical/referencable-box/referencable-box.component";
import {BoundingBox} from "ngx-svg-graphics";
import {ModelService} from "../../model.service";

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

    svgwidth = 1500;
    svgheigth = 1000;
    @Output() chooseElement: EventEmitter<Referencable<any>> = new EventEmitter();

  @ViewChild('svg', { static: true }) svg!: ElementRef<SVGElement>;
    get svgEl(): SVGElement {
        return this.svg.nativeElement;
    }

    @Input() modelService!: ModelService<M>

    @Input() customButtons: Array<{
      label: string;
      icon?: string;
      action: () => void;
  }> | null = null;
  initialBBox : BoundingBox = {x: this.svgwidth/2, y: 20, w: 400, h: 25}

  constructor() {}

  get sidebarButtons() {
      if (this.customButtons) return this.customButtons;
      else       //todo replace by default create buttons
          return[{label: "test", action: () => {console.log("Button on model edition works")}}];
  }

  choose(element: Referencable<any>) {
      this.chooseElement.emit(element);
  }
}
