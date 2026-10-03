import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {EditButtonDef} from "../edit-button-def";

@Component({
  selector: 'emfular-model-specific-palette',
  imports: [
    NgForOf,
    NgIf,
  ],
  templateUrl: './model-specific-palette.component.html',
  styleUrl: './model-specific-palette.component.css'
})
export class ModelSpecificPaletteComponent {
  @Input() buttons: EditButtonDef[]|null = []

}
