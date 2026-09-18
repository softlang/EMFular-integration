import { Component } from '@angular/core';
import {HighlightedCodeComponent} from "../../layout/highlighted-code/highlighted-code.component";
import {editButtonDef} from "./editor.component.code";

@Component({
  selector: 'demo-editor',
  imports: [
    HighlightedCodeComponent
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {

  protected readonly editButtonDef = editButtonDef;
}
