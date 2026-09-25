import { Component } from '@angular/core';
import {HighlightedCodeComponent} from "../../layout/highlighted-code/highlighted-code.component";
import {editButtonDef} from "./editor.component.code";
import {
    BasicEditorComponent,
    EditButtonDef,
    FileLevelBarComponent,
    ModelEditingBarComponent,
    ReferencableBoxComponent,
    TreeEditorComponent
} from "ngx-emfular-integration";
import {DemoModelService} from "../running-example/demo-model.service";
import {DemoElement2} from "../running-example/demo-model";

@Component({
  selector: 'demo-editor',
    imports: [
        HighlightedCodeComponent,
        ModelEditingBarComponent,
        FileLevelBarComponent,
        BasicEditorComponent,
        ReferencableBoxComponent,
        ReferencableBoxComponent,
        TreeEditorComponent
    ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {

  constructor(public readonly demoModelService: DemoModelService) {
      this.demoModelService.model.name = 'model0'
      const model01 = new DemoElement2('model01')
      const model02 = new DemoElement2('model02')
      this.demoModelService.model.children.push(model01, model02)
      model01.friends.push(model02)
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

  positionCompleteFirstElem = {x: 300, y: 0, w:80, h: 20};


  protected readonly editButtonDef = editButtonDef;
}
