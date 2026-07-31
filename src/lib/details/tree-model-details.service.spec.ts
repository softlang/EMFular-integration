import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { TestBed } from '@angular/core/testing';

import { TreeModelDetailsService } from './tree-model-details.service';
import {DummyReferencable} from "../test/dummy-referencable";

describe('BasicModelDetailsService', () => {
  let service: TreeModelDetailsService<DummyReferencable>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeModelDetailsService);
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
