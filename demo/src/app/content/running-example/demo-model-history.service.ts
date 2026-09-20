import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HistoryService} from "ngx-emfular-tool";
import {DemoElement1} from "./demo-model";
import {JsonOf} from "emfular-core";

@Injectable({
  providedIn: 'root'
})
export class DemoModelHistoryService extends HistoryService<JsonOf<DemoElement1>>{

  constructor(@Inject(PLATFORM_ID) platform: Object) {
    super("DEMO-history_", 50, platform)
  }
}
