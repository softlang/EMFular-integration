import {Component, Input} from '@angular/core';
import {Referencable} from 'emfular';
import {BoundingBox, RectangleComponent, TextAreaSvgComponent} from 'ngx-svg-graphics';
import {NgForOf} from "@angular/common";
import {ReferencableChildBoxComponent} from "../referencable-child-box/referencable-child-box.component";
import {GraphicalHelper} from "../graphical/graphical-helper";

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

  protected readonly GraphicalHelper = GraphicalHelper;
}
