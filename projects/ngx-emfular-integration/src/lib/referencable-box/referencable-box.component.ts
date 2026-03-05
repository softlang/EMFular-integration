import {Component, Input} from '@angular/core';
import {ReContainer, Referencable} from 'emfular';
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

  //todo static, refactor into emfular
  getAsList<T extends Referencable<any>>(refs: ReContainer<T, any>): T[] {
    const items: T[]|T|undefined = refs.get()
    if(items) {
      if(Array.isArray(items)) {
        return items
      }
      const result: T[] = [];
      result.push(items)
      return result
    } else {
      return [];
    }
  }

  static computeOffset(index: number, length: number): number {
    const middle = (length-1)/2;
    return index - middle;
  }
  computeChildBBox(index: number, length: number): BoundingBox {
    return {
      x: this.position.x + ReferencableBoxComponent.computeOffset(index, length)*(this.position.w+5),
      y: this.position.y+80,
      w: 400,
      h: 25
    }
  }
}
