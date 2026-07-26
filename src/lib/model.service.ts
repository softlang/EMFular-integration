import {Inject, Injectable, InjectionToken, PLATFORM_ID} from '@angular/core';
import {Deserializer, JsonDeserializable, JsonOf, Referencable} from "emfular-core";
import {HistoryService, IoService} from "ngx-emfular-tool";

export const HISTORY_SERVICE = new InjectionToken<HistoryService<any>>(
    'HistoryService'
);
export function provideHistoryForModel<M>(
    prefix: string = 'history_',
    bufferSize: number = 50
) {
  return {
    provide: HISTORY_SERVICE,
    useFactory: (platformId: Object) => new HistoryService<JsonOf<M>>(prefix, bufferSize, platformId),
    deps: [PLATFORM_ID]
  };
}


@Injectable({
  providedIn: 'root'
})
export abstract class ModelService<M extends Referencable<any>> {

  private _model!: M
  get model(): M {
    return this._model;
  }
  protected set model(model: M) {
    this._model = this.adjustModel(model);
    this.adaptToModel()
  }

  protected constructor(
      @Inject(HISTORY_SERVICE) readonly historyService: HistoryService<JsonOf<M>>,
      readonly ioService: IoService,
      protected readonly modelClass: JsonDeserializable<M>,
  ) {
    this._model = new modelClass()     //default initialization without calling set, since adjustments might need not yet initialized properties
    queueMicrotask(() => { //necessary to avoid timing issues if adjust model or adapt to model call services or other not initialized properties of the inheriting class
      this.historyService.state$.subscribe(state => {
        if (state) {
          this.applyJson(state);
        }
      });
    })
  }

  //default implementation to override if you need any normalization on a model before setting it
  adjustModel(model: M): M {
    return model;
  }

  //default implementation to override if you need adaptation of surroundings,
  // e.g. other attributes, notifications, signals etc
  adaptToModel() {}

  // override by either a fixed string or sth from the current model itself
  public fileTitle(): string {
    return "model"
  }

  newModel() {
    this.model = new this.modelClass()
    this.saveCurrentState()
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
    this.model = this.deserialize(modelJson);
    return this.model;
  }

  loadFromJson(modelJson: JsonOf<M>): void {
    this.applyJson(modelJson);
    this.saveCurrentState()
  }

  loadFromFile(event: Event) {
    this.ioService.loadStringFromFile(event).then(txt => {
      //todo insert detection code for wrong files (no json, not appropriately structured
      this.loadFromJson(JSON.parse(txt));
    });
  }

  save() {
    const jsonString = JSON.stringify(this.serialize());
    this.ioService.saveJson(jsonString, this.fileTitle())
  }

}
