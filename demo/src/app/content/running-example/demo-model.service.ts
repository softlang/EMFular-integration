import { Injectable } from '@angular/core';
import {DemoElement1, DemoElement2} from "./demo-model";
import {ModelService} from "ngx-emfular-integration";
import {IoService} from "ngx-emfular-tool";
import {DemoModelHistoryService} from "./demo-model-history.service";

@Injectable({
  providedIn: 'root'
})
export class DemoModelService extends ModelService<DemoElement1> {

  constructor(
      historyService: DemoModelHistoryService,
      ioService: IoService,
  ) {
    super(historyService, ioService, DemoElement1)
    this.initializeModel()
  }

  initializeModel() {
    this.model.name = 'model0'
    const model01 = new DemoElement2('model01')
    const model02 = new DemoElement2('model02')
    const model03 = new DemoElement2('model03')
    this.model.children.push(model01, model02, model03)
    model01.friends.push(model02)
  }
}
