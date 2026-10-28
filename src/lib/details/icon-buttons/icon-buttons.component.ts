import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IconButtonType} from "./icon-button-type";

@Component({
  selector: 'emfular-icon-button',
  imports: [],
  templateUrl: './icon-buttons.component.html',
  styleUrl: './icon-buttons.component.css'
})
export class IconButtonsComponent {

  @Input() type!: IconButtonType;
  @Input() size = 36;
  @Input() disabled = false;
  @Output() pressed = new EventEmitter<void>();

  get ariaLabel(): string {
    switch (this.type) {
      case IconButtonType.Add:
        return 'Add';
      case IconButtonType.Close:
        return 'Close';
      case IconButtonType.Delete:
        return 'Delete';
      case IconButtonType.Edit:
        return 'Edit';
      case IconButtonType.Inspect:
        return 'Inspect';
    }
  }

  onClick() {
    if (!this.disabled) {
      this.pressed.emit();
    }
  }

  readonly IconButtonType = IconButtonType;
}
