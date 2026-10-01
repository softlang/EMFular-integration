import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: '[expand-toggle]',
    standalone: true,
    template: `
    <svg:text [attr.x]="x"
              [attr.y]="y"
              text-anchor="end"
              dominant-baseline="text-after-edge"
              (click)="toggle($event)"
    >
        {{ expanded ? '▲' : '▼' }}
    </svg:text>
  `
})
export class ExpandToggleComponent {
    @Input() x = 0;
    @Input() y = 0;
    @Input() expanded = false;
    @Output() expandedChange = new EventEmitter<boolean>();

    toggle($event: MouseEvent): void {
        $event.stopPropagation()
        this.expandedChange.emit(!this.expanded);
    }
}