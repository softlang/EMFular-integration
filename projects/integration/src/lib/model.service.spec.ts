import { TestBed } from '@angular/core/testing';

import {HISTORY_SERVICE, ModelService, provideHistoryForModel} from './model.service';
import {HistoryService, IoService } from 'ngx-emfular-tool';
import {BehaviorSubject} from "rxjs";
import {DummyReferencable} from './test/dummy-referencable';
import {JsonOf} from "emfular-core";

class DummyModelService extends ModelService<DummyReferencable> {
  constructor(
      history: HistoryService<JsonOf<DummyReferencable>>,
      io: IoService
  ) {
    super(history, io, DummyReferencable);
  }

  id: string = "service"

  override adaptToModel() {
    this.id = "better service"// this would fail on construction if the model did not delay subscription
  }
}

describe('ModelServiceService', () => {

  let service: ModelService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          provideHistoryForModel('test_', 10),
        { provide: IoService, useClass: IoService },
        { provide: DummyModelService, useFactory: () =>
              new DummyModelService(
                  TestBed.inject(HISTORY_SERVICE),
                  TestBed.inject(IoService),
              ) }
      ]
    });
    service = TestBed.inject(DummyModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


class HistoryServiceStub<T> {
  subject = new BehaviorSubject<T | null>(null);

  push(value: T) {
    this.subject.next(value);
  }

  get stream() {
    return this.subject.asObservable();
  }
}

describe('ModelService with HistoryService emitting immediately', () => {
  let historyStub: HistoryServiceStub<any>;

  beforeEach(() => {
    historyStub = new HistoryServiceStub<any>();
    historyStub.subject.next({ foo: 'bar' }); // immediate emission

    TestBed.configureTestingModule({
      providers: [
        { provide: HISTORY_SERVICE, useValue: historyStub },
        { provide: IoService, useValue: {} },
        { provide: DummyModelService, useFactory: () =>
              new DummyModelService(
                  TestBed.inject(HISTORY_SERVICE),
                  TestBed.inject(IoService),
              ) }
      ]
    });
  });

  it('should be created', () => {
    const service = TestBed.inject(DummyModelService);
    expect(service).toBeTruthy();
  });

});

