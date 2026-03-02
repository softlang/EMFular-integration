import {Component, Input} from '@angular/core';
import { Referencable } from 'emfular';
import { BoundingBox, RectangleComponent, TextAreaSvgComponent } from 'svg-graphics';

@Component({
  selector: '[referencable-box]',
  imports: [RectangleComponent, TextAreaSvgComponent],
  templateUrl: './referencable-box.component.svg',
  styleUrl: './referencable-box.component.css'
})
export class ReferencableBoxComponent {
  @Input() referencable!: Referencable<any>;
  @Input() position!: BoundingBox
  @Input() color?: string

  constructor() {}

}
