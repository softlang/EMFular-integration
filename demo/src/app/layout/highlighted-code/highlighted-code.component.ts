import {AfterContentInit, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {CodeHighlighterService} from "../code-highlighter.service";

@Component({
  selector: 'demo-highlighted-code',
  imports: [],
  templateUrl: './highlighted-code.component.html',
  styleUrl: './highlighted-code.component.css'
})
export class HighlightedCodeComponent implements OnChanges{

  @Input() code!: string;


  highlightedCode: SafeHtml = '';

  constructor(
      private readonly highlighter: CodeHighlighterService,
      private readonly sanitizer: DomSanitizer
  ) {}

  async ngOnChanges(changes: SimpleChanges) {
    if (changes.code !== undefined) {
      this.highlightedCode = this.sanitizer.bypassSecurityTrustHtml(
          await this.highlighter.highlight(this.code)
      );
    }
  }

}
