import { TestBed } from '@angular/core/testing';

import { CodeHighlighterService } from './code-highlighter.service';

describe('CodeHighlighterService', () => {
  let service: CodeHighlighterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeHighlighterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
