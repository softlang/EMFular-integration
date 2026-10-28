import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IconButtonType} from "./icon-button-type";
import {NgSwitch, NgSwitchCase} from "@angular/common";

@Component({
  selector: 'emfular-icon-button',
  imports: [
    NgSwitch
  ],
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
        return 'Add element';
      case IconButtonType.Delete:
        return 'Delete element';
      case IconButtonType.Close:
        return 'Close';
    }
  }

  onClick() {
    if (!this.disabled) {
      this.pressed.emit();
    }
  }

  readonly IconButtonType = IconButtonType;
}
