import {Component, EventEmitter, Input, Output} from "@angular/core";
import {TextAreaSvgComponent} from "ngx-emfular-diagram";

@Component({
    selector: '[expand-toggle]',
    standalone: true,
    imports: [TextAreaSvgComponent],
    template: `
    <svg:g text-area-svg
       [text]="expanded ? '▲' : '▼'"
       [x]="x"
       [y]="y"
       [w]="25"
       [h]="25"
       (click)="toggle()">
    </svg:g>
  `
})
export class ExpandToggleComponent {
    @Input() x = 0;
    @Input() y = 0;
    @Input() expanded = false;
    @Output() expandedChange = new EventEmitter<boolean>();

    toggle(): void {
        this.expandedChange.emit(!this.expanded);
    }
}