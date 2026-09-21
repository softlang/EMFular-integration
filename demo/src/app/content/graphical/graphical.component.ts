import { Component } from '@angular/core';
import {BoundingBox, SvgCanvasComponent} from "ngx-emfular-diagram";
import {
  ReferencableBoxComponent
} from "ngx-emfular-integration";
import {DemoElement1, DemoElement2} from "../running-example/demo-model";

@Component({
  selector: 'demo-graphical',
  imports: [
    SvgCanvasComponent,
    ReferencableBoxComponent
  ],
  templateUrl: './graphical.component.html',
  styleUrl: './graphical.component.css'
})
export class GraphicalComponent {

  model0: DemoElement1;
  model01: DemoElement2;
  model02: DemoElement2;

  initialBbox: BoundingBox = {x: 500, y: 0, w: 200, h: 50}


  constructor() {
    this.model0 = new DemoElement1('model0')
    this.model01 = new DemoElement2('model01')
    this.model02 = new DemoElement2('model02')
    this.model0.children.push(this.model01, this.model02)
    this.model01.friends.push(this.model02)
  }
}
