import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Referencable, ReTreeChildrenContainer} from 'emfular-core';
import {ArrowBetweenElemsComponent, BoundingBox, RectangleWithTextComponent, PositionHelper} from 'ngx-emfular-diagram';
import {GraphicalHelper} from "../../utils/graphical-helper";
import {IdHelper} from "../../utils/id-helper";

@Component({
  selector: '[referencable-box]',
  imports: [RectangleWithTextComponent, ArrowBetweenElemsComponent],
  templateUrl: './referencable-box.component.svg',
  styleUrl: './referencable-box.component.css'
})
export class ReferencableBoxComponent {
  @Input() referencable!: Referencable<any>;
  @Input() position!: BoundingBox
  @Input() color?: string = "#efad78"
  @Output() chooseElement: EventEmitter<Referencable<any>> = new EventEmitter();
  @Output() chooseReference: EventEmitter<ReTreeChildrenContainer<any>> = new EventEmitter();

  isExpandedArray: boolean[] = []

  constructor() {}

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

  choose(element: Referencable<any>) {
    this.chooseElement.emit(element);
  }

  chooseRef(ref: ReTreeChildrenContainer<any>) {
    this.chooseReference.emit(ref)
  }


  protected readonly GraphicalHelper = GraphicalHelper;
  protected readonly PositionHelper = PositionHelper
  protected readonly IdHelper = IdHelper;
}
