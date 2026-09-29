import {Component, EventEmitter, Input, Output } from '@angular/core';
import {Referencable, ReTreeChildrenContainer} from 'emfular-core';
import {
  ArrowBetweenElemsComponent,
  BoundingBox,
  DraggableDirective,
  RectangleComponent,
  TextAreaSvgComponent
} from 'ngx-emfular-diagram';
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: '[referencable-box]',
  imports: [
    RectangleComponent,
    TextAreaSvgComponent,
    ArrowBetweenElemsComponent,
    NgTemplateOutlet,
    DraggableDirective,
  ],
  templateUrl: './referencable-box.component.svg',
  styleUrl: './referencable-box.component.css'
})
export class ReferencableBoxComponent {
  @Input() referencable!: Referencable<any>;
  @Input() position!: BoundingBox
  @Input() color?: string = "#efad78"
  @Output() chooseElement: EventEmitter<Referencable<any>> = new EventEmitter();
  @Output() chooseReference: EventEmitter<ReTreeChildrenContainer<any>> = new EventEmitter();

  isExpanded = true;
  isExpandedArray: boolean[] = []

  constructor() {}

  toggleMainExand() {
    this.isExpanded = !this.isExpanded
  }
  toggleExpand(i: number) {
    this.isExpandedArray[i]= !this.isExpandedArray[i];
  }

  createBoxInLastPart(bb: BoundingBox): BoundingBox {
    return {
      x: bb.x+bb.w -25,
      y: bb.y+bb.h -25,
      w: 25,
      h: 25
    }
  }

  private computeOffset(index: number, length: number): number {
    const middle = (length-1)/2;
    return index - middle;
  }
  computeChildBBox(index: number, length: number, parentBox: BoundingBox): BoundingBox {
    return {
      x: parentBox.x + this.computeOffset(index, length)*(parentBox.w+5),
      y: parentBox.y+parentBox.h*2,
      w: parentBox.w,
      h: parentBox.h
    }
  }

  choose(element: Referencable<any>) {
    this.chooseElement.emit(element);
    console.log("Real click")
  }

  chooseRef(ref: ReTreeChildrenContainer<any>) {
    this.chooseReference.emit(ref)
  }

}
