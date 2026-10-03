import { TestBed } from '@angular/core/testing';

import { DemoModelHistoryService } from './demo-model-history.service';

describe('DemoModelHistoryService', () => {
  let service: DemoModelHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoModelHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
