import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {EditButtonDef} from "../edit-button-def";

@Component({
  selector: 'emfular-model-editing-bar',
  imports: [
    NgForOf,
    NgIf,
  ],
  templateUrl: './model-editing-bar.component.html',
  styleUrl: './model-editing-bar.component.css'
})
export class ModelEditingBarComponent {
  @Input() buttons: EditButtonDef[]|null = []

}
