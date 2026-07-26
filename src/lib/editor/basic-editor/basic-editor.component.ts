import { Referencable } from "emfular-core";
import {Component, Input} from "@angular/core";
import {ModelService} from "../../model.service";
import {ModelCanvasComponent} from "../model-canvas/model-canvas.component";
import {FileLevelBarComponent} from "../file-level-bar/file-level-bar.component";

@Component({
  selector: 'emfular-basic-editor',
  standalone: true,
  imports: [ModelCanvasComponent, FileLevelBarComponent],
  templateUrl: './basic-editor.component.html',
  styleUrls: ['./basic-editor.component.css']
})
export class BasicEditorComponent<M extends Referencable<any>> {
  @Input() modelService!: ModelService<M>;
  @Input() svgwidth = 1500;
  @Input() svgheight = 1000;

  svgElement!: SVGSVGElement;

  constructor() {}

  onSvgReady(svg: SVGSVGElement) {
    queueMicrotask(() => this.svgElement = svg);
  }

}
