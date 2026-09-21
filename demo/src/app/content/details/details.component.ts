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

  constructor(public readonly demoModelService: DemoModelService) {
  }

  model0 = new DemoElement1()
  model01 = new DemoElement2()
  model02 = new DemoElement2()

}
