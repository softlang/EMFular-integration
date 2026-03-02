import { TestBed } from '@angular/core/testing';

import {HISTORY_SERVICE, ModelService, provideHistoryForModel} from './model.service';
import {HistoryService, IoService } from 'ngx-emfular-helper';
import { Referencable } from 'emfular';

describe('ModelServiceService', () => {

  class DummyModel extends Referencable<any>{
    id = 'x';
    constructor() {
      super();
    }
  }

  class DummyModelService extends ModelService<DummyModel> {
    constructor(
        history: HistoryService<DummyModel>,
        io: IoService
    ) {
      super(history, io, DummyModel);
    }
  }

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
