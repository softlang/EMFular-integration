import { TestBed } from '@angular/core/testing';

import { DemoModelHistoryService } from './demo-model-history.service';
import {afterEach} from "vitest";

describe('DemoModelHistoryService', () => {
  let service: DemoModelHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoModelHistoryService);
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
