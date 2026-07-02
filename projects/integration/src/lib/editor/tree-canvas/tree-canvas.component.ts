import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ReferencableBoxComponent} from "../../graphical/referencable-box/referencable-box.component";
import {ModelService} from "../../model.service";
import { Referencable, ReTreeChildrenContainer } from 'emfular-core';
import { BoundingBox } from 'ngx-emfular-diagram';
import {ModelCanvasComponent} from "../model-canvas/model-canvas.component";

@Component({
  selector: 'tree-canvas',
  imports: [
    ReferencableBoxComponent,
    ModelCanvasComponent
  ],
  templateUrl: './tree-canvas.component.html',
  styleUrl: './tree-canvas.component.css'
})
export class TreeCanvasComponent<M extends Referencable<any>> {
  svgwidth = 1500;
  svgheigth = 1000;
  initialBBox : BoundingBox = {x: this.svgwidth/2, y: 20, w: 200, h: 25}

  @Input() modelService!: ModelService<M>
  @Output() chooseElement: EventEmitter<Referencable<any>> = new EventEmitter();
  @Output() chooseReference: EventEmitter<ReTreeChildrenContainer<any>> = new EventEmitter();
  @Output() svgReady: EventEmitter<SVGSVGElement> = new EventEmitter<SVGSVGElement>();

  choose(element: Referencable<any>): void {
    this.chooseElement.emit(element);
  }

  chooseRef(reference: ReTreeChildrenContainer<any>) {
    this.chooseReference.emit(reference);
  }

}
