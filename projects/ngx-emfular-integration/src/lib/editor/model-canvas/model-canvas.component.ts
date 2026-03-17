import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'model-canvas',
  imports: [],
  templateUrl: './model-canvas.component.html',
  styleUrl: './model-canvas.component.css'
})
export class ModelCanvasComponent implements  OnInit {

  @Input() svgwidth!: number;
  @Input() svgheigth!: number
  @Output() svgReady: EventEmitter<SVGSVGElement> = new EventEmitter<SVGSVGElement>();
  @ViewChild('svg', { static: true })
  svg!: ElementRef<SVGSVGElement>;

  ngOnInit() {
    // Safe because static: true
    this.svgReady.emit(this.svg.nativeElement);
  }

}
