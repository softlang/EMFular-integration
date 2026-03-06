import { TestBed } from '@angular/core/testing';

import { BasicModelDetailsService } from './basic-model-details.service';

describe('BasicModelDetailsService', () => {
  let service: BasicModelDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicModelDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
