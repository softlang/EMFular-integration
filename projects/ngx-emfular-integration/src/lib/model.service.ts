import {Inject, Injectable, InjectionToken} from '@angular/core';
import {Deserializer, JsonDeserializable, JsonOf, Referencable} from "emfular";
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
export class ModelService<M extends Referencable<any>> {

  private _model!: M
  get model(): M {
    return this._model;
  }
  protected set model(model: M) {
    this._model = this.adjustModel(model);
    this.adaptToModel()
  }

  constructor(
      @Inject(HISTORY_SERVICE) readonly historyService: HistoryService<JsonOf<M>>,
      readonly ioService: IoService,
      private readonly modelClass: JsonDeserializable<M>
  ) {
    //should actually initialize a model:this._model = new M;
    this.historyService.state$.subscribe(state => {
      if (state) {
        this.applyJson(state);
      }
    });
  }

  //default implementation to override if you need any normalization on a model before setting it
  adjustModel(model: M): M {
    return model;
  }

  //default implementation to override if you need adaptation of surroundings,
  // e.g. other attributes, notifications, signals etc
  adaptToModel() {}

  // override by either a fixed string or sth from the current model itself
  fileTitle(): string {
    return "model"
  }


  serialize(): JsonOf<M> {
    return this.model.toJson()
  }

  deserialize(modelJson: JsonOf<M>): M {
    let modelEClass = new this.modelClass().getEClass();
    return Deserializer.fromJSON<M>(modelJson, modelEClass);
  }

  saveCurrentState() {
    this.historyService.save(this.serialize())
  }

  protected applyJson(modelJson: JsonOf<M>): M {
    this._model = this.deserialize(modelJson);
    return this.model;
  }

  loadFromFile(event: Event) {
    this.ioService.loadStringFromFile(event).then(txt => {
      //todo insert detection code for wrong files (no json, not appropriately structured
      this.applyJson(JSON.parse(txt));
      this.saveCurrentState()
    });
  }

  save() {
    const jsonString = JSON.stringify(this.serialize());
    this.ioService.saveJson(jsonString, this.fileTitle())
  }

}
