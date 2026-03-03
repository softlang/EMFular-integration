import {Component, ElementRef, ViewChild} from '@angular/core';
import { IoService} from "ngx-emfular-helper";
import {ModelService} from "ngx-emfular-integration";
import { Referencable} from "emfular";
import {FileLevelBarComponent} from "../editor/file-level-bar/file-level-bar.component";

@Component({
  selector: 'lib-tree-editor',
    imports: [
        FileLevelBarComponent
    ],
  templateUrl: './tree-editor.component.html',
  styleUrl: './tree-editor.component.css'
})
export class TreeEditorComponent<M extends Referencable<any>> {

  @ViewChild('svg', { static: true }) svg!: ElementRef<SVGElement>;

  constructor(
      //public history: HistoryService<JsonOf<M>>,
      public modelService: ModelService<M>,
      protected ioService: IoService,
  ) {



  }



}
