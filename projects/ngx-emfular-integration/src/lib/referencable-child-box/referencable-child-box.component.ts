import {Component, Input} from '@angular/core';
import {Referencable} from "emfular";
import {
  ArrowBetweenElemsComponent,
  BoundingBox,
  RectangleComponent,
  TextAreaSvgComponent
} from 'ngx-svg-graphics';
import {NgForOf} from "@angular/common";
import {ReferencableBoxComponent} from "../referencable-box/referencable-box.component";
import {GraphicalHelper} from "../graphical/graphical-helper";

@Component({
  selector: '[referencable-child-box]',
  imports: [
    NgForOf,
    RectangleComponent,
    TextAreaSvgComponent,
    ArrowBetweenElemsComponent,
    ReferencableBoxComponent,
  ],
  templateUrl: './referencable-child-box.component.svg',
  styleUrl: './referencable-child-box.component.css'
})
export class ReferencableChildBoxComponent {
  @Input() refName!: string;
  @Input() children: Referencable<any>[] = []
  @Input() parentGId!: string;
  @Input() middle!: BoundingBox

  public color = "#ede679"

  expanded: boolean = false;
  constructor() {}

  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  protected readonly GraphicalHelper = GraphicalHelper;
}
