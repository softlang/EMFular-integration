import { Component } from '@angular/core';
import {ModelDetailsComponent} from "ngx-emfular-integration";
import {DemoElement1, DemoElement2} from "../running-example/demo-model";
import {DemoModelService} from "../running-example/demo-model.service";

@Component({
  selector: 'demo-details',
    imports: [
        ModelDetailsComponent
    ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  model0: DemoElement1;
  model01: DemoElement2;
  model02: DemoElement2;


  constructor(public readonly demoModelService: DemoModelService) {
    this.model0 = new DemoElement1('model0')
    this.model01 = new DemoElement2('model01')
    this.model02 = new DemoElement2('model02')
    this.model0.children.push(this.model01, this.model02)
  }



}
