import { Injectable } from '@angular/core';
import {DemoElement1} from "./demo-model";
import {ModelService} from "ngx-emfular-integration";
import {HistoryService, IoService} from "ngx-emfular-tool";
import {JsonOf} from "emfular-core";
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
  }
}
