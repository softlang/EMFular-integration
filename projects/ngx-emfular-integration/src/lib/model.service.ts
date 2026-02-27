import {Inject, Injectable, InjectionToken} from '@angular/core';
import {JsonOf, Referencable} from "emfular";
import {HistoryService, IoService} from "ngx-emfular-helper";

export const HISTORY_SERVICE = new InjectionToken<HistoryService<any>>(
    'HistoryService'
);
export function provideHistoryForModel<M>(
    prefix: string = 'history_',
    bufferSize: number = 50
) {
  return {
    provide: HISTORY_SERVICE,
    useFactory: () => new HistoryService<JsonOf<M>>(prefix, bufferSize)
  };
}


@Injectable({
  providedIn: 'root'
})
export abstract class ModelService<M extends Referencable<any>> {

  protected _model!: M
  get model(): M {
    return this._model;
  }

  abstract fileTitle(): string // either a fixed string or sth from the current model itself

  // M.fromJson(modelJson) plus any convenience /graphical organization necessary
  abstract deserialize(modelJson: JsonOf<M>): M

  protected constructor(
      @Inject(HISTORY_SERVICE) readonly historyService: HistoryService<JsonOf<M>>,
      readonly ioService: IoService
  ) {
    //should actually initialize a model:this._model = new M;
    this.historyService.state$.subscribe(state => {
      if (state) {
        this.deserialize(state);
      }
    });
  }

  serialize(): JsonOf<M> {
    return this.model.toJson()
  }

  saveCurrentState() {
    this.historyService.save(this.serialize())
  }

  protected applyModel(modelJson: JsonOf<M>): M {
    let m: M = this.deserialize(modelJson);
    this._model = m;
    return m;
  }

  load(modelJson: JsonOf<M>): M {
    const model = this.applyModel(modelJson);
    this.saveCurrentState()
    return model;
  }

  loadFromFile(event: Event) {
    this.ioService.loadStringFromFile(event).then(txt => {
      //todo insert detection code for wrong files (no json, not appropriately structured
      this.load(JSON.parse(txt));
    });
  }

  save() {
    const jsonString = JSON.stringify(this.serialize());
    this.ioService.saveJson(jsonString, this.fileTitle())
  }

}
