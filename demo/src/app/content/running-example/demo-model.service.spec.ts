import { TestBed } from '@angular/core/testing';

import { DemoModelService } from './demo-model.service';

describe('DemoModelService', () => {
  let service: DemoModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
