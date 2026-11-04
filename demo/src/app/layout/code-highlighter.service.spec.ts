import { TestBed } from '@angular/core/testing';

import { CodeHighlighterService } from './code-highlighter.service';
import {afterEach} from "vitest";

describe('CodeHighlighterService', () => {
  let service: CodeHighlighterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeHighlighterService);
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
