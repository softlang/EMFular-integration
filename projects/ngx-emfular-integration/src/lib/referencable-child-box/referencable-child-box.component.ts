import {Component, Input} from '@angular/core';
import {Referencable} from "emfular";
import {
  ArrowBetweenElemsComponent,
  BoundingBox,
  RectangleComponent,
  TextAreaSvgComponent
} from 'ngx-svg-graphics';
import {NgForOf} from "@angular/common";

@Component({
  selector: '[referencable-child-box]',
  imports: [
    NgForOf,
    RectangleComponent,
    TextAreaSvgComponent,
    ArrowBetweenElemsComponent,
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

}
