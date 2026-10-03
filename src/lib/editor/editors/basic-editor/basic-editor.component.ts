import { Referencable } from "emfular-core";
import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {ModelService} from "../../../model.service";
import {SvgCanvasComponent} from "ngx-emfular-diagram";
import {MainEditorBarComponent} from "../../main-editor-bar/main-editor-bar.component";

@Component({
  selector: 'emfular-basic-editor',
  standalone: true,
  imports: [SvgCanvasComponent, MainEditorBarComponent],
  templateUrl: './basic-editor.component.html',
  styleUrls: ['./basic-editor.component.css']
})
export class BasicEditorComponent<
    M extends Referencable<any>
> implements OnChanges {
  @Input() modelService!: ModelService<M>;
  @Input() svgwidth = 1500;
  @Input() svgheight = 1000;

  svgElement!: SVGSVGElement;

  viewBox: string = "0 0 1500 1000"

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.svgwidth || changes.svgheight) {
      this.viewBox = "0 0 "+this.svgwidth+" "+this.svgheight;
    }
  }

  onSvgReady(svg: SVGSVGElement) {
    queueMicrotask(() => this.svgElement = svg);
  }

}
