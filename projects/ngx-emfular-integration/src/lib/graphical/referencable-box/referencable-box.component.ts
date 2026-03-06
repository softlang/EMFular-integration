import {Component, Input} from '@angular/core';
import {Referencable} from 'emfular';
import {ArrowBetweenElemsComponent, BoundingBox, RectangleWithTextComponent, PositionHelper} from 'ngx-svg-graphics';
import {GraphicalHelper} from "../graphical-helper";

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

  constructor() {}

  protected readonly GraphicalHelper = GraphicalHelper;
  protected readonly PositionHelper = PositionHelper
}
