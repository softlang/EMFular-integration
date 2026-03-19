import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Referencable, ReTreeChildrenContainer } from 'emfular';
import { BoundingBox } from 'ngx-svg-graphics';

import { ModelService } from '../../model.service';
import { ModelCanvasComponent } from '../model-canvas/model-canvas.component';
import { ReferencableBoxComponent } from '../../graphical/referencable-box/referencable-box.component';
import { VisibleNodeRegistry } from "./services/visible-node-registry.service";

@Component({
  selector: 'merged-tree-relations-canvas',
  providers: [VisibleNodeRegistry],
  imports: [
    ModelCanvasComponent,
    ReferencableBoxComponent
  ],
  templateUrl: './merged-tree-relations-canvas.component.html',
  styleUrl: './merged-tree-relations-canvas.component.css'
})
export class MergedTreeRelationsCanvasComponent<M extends Referencable<any>> {
  svgwidth = 1500;
  svgheigth = 1000;

  initialBBox: BoundingBox = {
    x: this.svgwidth / 2,
    y: 20,
    w: 200,
    h: 25
  };

  @Input() modelService!: ModelService<M>;

  @Output() chooseElement: EventEmitter<Referencable<any>> = new EventEmitter();
  @Output() chooseReference: EventEmitter<ReTreeChildrenContainer<any>> = new EventEmitter();
  @Output() svgReady: EventEmitter<SVGSVGElement> = new EventEmitter<SVGSVGElement>();

  choose(element: Referencable<any>): void {
    this.chooseElement.emit(element);
  }

  chooseRef(reference: ReTreeChildrenContainer<any>): void {
    this.chooseReference.emit(reference);
  }

  constructor() {}
}