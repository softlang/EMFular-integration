import {Component, ElementRef, ViewChild} from '@angular/core';
import {HistoryService, IoService} from "ngx-emfular-helper";
import {ModelService} from "ngx-emfular-integration";
import {JsonOf, Referencable} from "emfular";

@Component({
  selector: 'lib-tree-editor',
  imports: [],
  templateUrl: './tree-editor.component.html',
  styleUrl: './tree-editor.component.css'
})
export class TreeEditorComponent<M extends Referencable<any>> {

  @ViewChild("svg") svg!: ElementRef<SVGElement>;

  constructor(
      //public history: HistoryService<JsonOf<M>>,
      public modelService: ModelService<M>,
      protected ioService: IoService,
  ) {



  }

  saveSVG() {
    const svgContent = this.svg.nativeElement;
    if(svgContent) {
      this.ioService.saveSVG(svgContent, this.modelService.fileTitle())
    }
  }

  saveSVGasPNG() {
    const svgContent = this.svg.nativeElement;
    if(svgContent) {
      this.ioService.saveSvgAsPng(svgContent, this.modelService.fileTitle())
    }
  }

  saveSVGasJPEG() {
    const svgContent = this.svg.nativeElement;
    if(svgContent) {
      this.ioService.saveSvgAsJpeg(svgContent, this.modelService.fileTitle())
    }
  }


}
