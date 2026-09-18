import { Injectable } from '@angular/core';
import { createHighlighter } from 'shiki';

@Injectable({
  providedIn: 'root'
})
export class CodeHighlighterService {

  private highlighterPromise = createHighlighter({
    themes: ['github-light'],
    langs: ['html']
  });

  async highlight(code: string): Promise<string> {
    const highlighter = await this.highlighterPromise;

    return highlighter.codeToHtml(code, {
      lang: 'html',
      theme: 'github-light'
    });
  }
}