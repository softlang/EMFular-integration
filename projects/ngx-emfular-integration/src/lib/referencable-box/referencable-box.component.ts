import {Component, Input} from '@angular/core';
import {Referencable} from 'emfular';
import {BoundingBox, RectangleComponent, TextAreaSvgComponent} from 'ngx-svg-graphics';
import {NgForOf} from "@angular/common";
import {ReferencableChildBoxComponent} from "../referencable-child-box/referencable-child-box.component";

@Component({
  selector: '[referencable-box]',
  imports: [RectangleComponent, TextAreaSvgComponent, NgForOf, ReferencableChildBoxComponent, TextAreaSvgComponent],
  templateUrl: './referencable-box.component.svg',
  styleUrl: './referencable-box.component.css'
})
export class ReferencableBoxComponent {
  @Input() referencable!: Referencable<any>;
  @Input() position!: BoundingBox
  @Input() color?: string = "#efad78"

  constructor() {}

  static computeOffset(index: number, length: number): number {
    const middle = (length-1)/2;
    return index - middle;
  }
  computeChildBBox(index: number, length: number): BoundingBox {
    return {
      x: this.position.x + ReferencableBoxComponent.computeOffset(index, length)*55,
      y: this.position.y+80,
      w: 50,
      h: 20
    }
  }
}
