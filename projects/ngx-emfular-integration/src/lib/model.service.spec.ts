import { TestBed } from '@angular/core/testing';

import { ModelService } from './model.service';

describe('ModelServiceService', () => {
  let service: ModelService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
