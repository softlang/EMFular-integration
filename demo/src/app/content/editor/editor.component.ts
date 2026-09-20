import { Component } from '@angular/core';
import {HighlightedCodeComponent} from "../../layout/highlighted-code/highlighted-code.component";
import {editButtonDef} from "./editor.component.code";
import {
  EditButtonDef, FileLevelBarComponent,
  ModelEditingBarComponent
} from "ngx-emfular-integration";
import {DemoModelService} from "../running-example/demo-model.service";

@Component({
  selector: 'demo-editor',
  imports: [
    HighlightedCodeComponent,
    ModelEditingBarComponent,
    FileLevelBarComponent
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {

  constructor(public readonly demoModelService: DemoModelService) {
  }

  buttons0: EditButtonDef[] = [
    {label: "label1", action: () =>this.buttonAction("label1")},
    {label: "label2", action: () =>this.buttonAction("label2")},
    {label: "reset", action: () =>this.buttonReset(), disabled: true},
  ]
  private adaptResetButton(value: boolean) {
    this.buttons0[2].disabled = value
  }

  initialMsg0 = 'click the buttons: '
  buttonMessage0: string = this.initialMsg0

  buttonAction(str: string) {
    this.buttonMessage0+=str+" clicked "
    this.adaptResetButton(false)
  }

  buttonReset() {
    this.buttonMessage0 = this.initialMsg0;
    this.adaptResetButton(true);
  }

  protected readonly editButtonDef = editButtonDef;
}
