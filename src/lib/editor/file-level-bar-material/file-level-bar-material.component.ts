import {Component, Input} from '@angular/core';
import {InputHandler, IoService} from "ngx-emfular-tool";
import {Referencable} from "emfular-core";
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {ModelService} from "../../model.service";

@Component({
  selector: 'emfular-file-level-bar-material',
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './file-level-bar-material.component.html',
  styleUrl: './file-level-bar-material.component.css'
})
export class FileLevelBarMaterialComponent<M extends Referencable<any>> {
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
