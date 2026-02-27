import { TestBed } from '@angular/core/testing';

import { ModelServiceService } from './model-service.service';

describe('ModelServiceService', () => {
  let service: ModelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
