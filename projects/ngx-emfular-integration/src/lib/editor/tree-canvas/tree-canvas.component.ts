import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ReferencableBoxComponent} from "../../graphical/referencable-box/referencable-box.component";
import {ModelService} from "../../model.service";
import { Referencable, ReTreeChildrenContainer } from 'emfular';
import { BoundingBox } from 'ngx-svg-graphics';

@Component({
  selector: 'tree-canvas',
    imports: [
        ReferencableBoxComponent
    ],
  templateUrl: './tree-canvas.component.html',
  styleUrl: './tree-canvas.component.css'
})
export class TreeCanvasComponent<M extends Referencable<any>> implements OnInit {
  svgwidth = 1500;
  svgheigth = 1000;
  initialBBox : BoundingBox = {x: this.svgwidth/2, y: 20, w: 200, h: 25}

  @Input() modelService!: ModelService<M>
  @Output() chooseElement: EventEmitter<Referencable<any>> = new EventEmitter();
  @Output() chooseReference: EventEmitter<ReTreeChildrenContainer<any>> = new EventEmitter();
  @Output() svgReady: EventEmitter<SVGSVGElement> = new EventEmitter<SVGSVGElement>();
  @ViewChild('svg', { static: true })
  svg!: ElementRef<SVGSVGElement>;

  ngOnInit() {
    // Safe because static: true
    this.svgReady.emit(this.svg.nativeElement);
  }

  choose(element: Referencable<any>): void {
    this.chooseElement.emit(element);
  }

  chooseRef(reference: ReTreeChildrenContainer<any>) {
    this.chooseReference.emit(reference);
  }

}
