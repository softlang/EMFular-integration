import { TestBed } from '@angular/core/testing';

import { TreeModelDetailsService } from './tree-model-details.service';

describe('BasicModelDetailsService', () => {
  let service: TreeModelDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeModelDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
