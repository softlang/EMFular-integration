import {Component, Input} from '@angular/core';
import { Referencable } from 'emfular';

@Component({
  selector: 'lib-model-details',
  imports: [],
  templateUrl: './model-details.component.html',
  styleUrl: './model-details.component.css'
})
export class ModelDetailsComponent<T extends Referencable<any>> {
  @Input() model!:T


}

