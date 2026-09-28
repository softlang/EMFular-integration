import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { TestBed } from '@angular/core/testing';

import { GraphicalTreeDetailsService } from './graphical-tree-details.service';
import {DummyReferencable} from "../test/dummy-referencable";

describe('BasicModelDetailsService', () => {
  let service: GraphicalTreeDetailsService<DummyReferencable>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphicalTreeDetailsService);
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
