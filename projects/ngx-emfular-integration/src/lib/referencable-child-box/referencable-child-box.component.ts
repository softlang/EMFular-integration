import {Component, Input} from '@angular/core';
import {Referencable} from "emfular";
import { BoundingBox } from 'ngx-svg-graphics';

@Component({
  selector: '[referencable-child-box]',
  imports: [],
  templateUrl: './referencable-child-box.component.svg',
  styleUrl: './referencable-child-box.component.css'
})
export class ReferencableChildBoxComponent {
  @Input() refName!: string;
  @Input() isSingle = false;
  @Input() children?: Referencable<any>[]
  @Input() child?: Referencable<any>
  @Input() parentGId!: string;
  @Input() middle!: BoundingBox

  expanded: boolean = false;
  constructor() {}

  toggleExpanded() {
    this.expanded = !this.expanded;
  }

}
