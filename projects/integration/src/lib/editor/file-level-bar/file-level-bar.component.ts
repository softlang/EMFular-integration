import {Component, Input} from '@angular/core';
import {InputHandler, IoService} from "ngx-emfular-tool";
import {Referencable} from "emfular-core";
import {ModelService} from "../../model.service";

@Component({
  selector: 'emfular-file-level-bar',
  imports: [],
  templateUrl: './file-level-bar.component.html',
  styleUrl: './file-level-bar.component.css'
})
export class FileLevelBarComponent<M extends Referencable<any>> {
  @Input() svg!: SVGElement
  @Input() modelService!: ModelService<M>
  protected readonly InputHandler = InputHandler;

  constructor(public ioService: IoService) {
  }

  openModel() {
    document.getElementById('openModel')?.click();
  }


  saveSVG() {
    const svgContent = this.svg;
    if(svgContent) {
      this.ioService.saveSVG(svgContent, this.modelService.fileTitle())
    }
  }

  saveSVGasPNG() {
    const svgContent = this.svg;
    if(svgContent) {
      this.ioService.saveSvgAsPng(svgContent, this.modelService.fileTitle())
    }
  }

  saveSVGasJPEG() {
    const svgContent = this.svg;
    if(svgContent) {
      this.ioService.saveSvgAsJpeg(svgContent, this.modelService.fileTitle())
    }
  }


}
