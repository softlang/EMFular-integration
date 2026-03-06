import {Component, Input} from '@angular/core';
import { ReTreeChildrenContainer } from 'emfular';

@Component({
  selector: 'tree-container-adapter',
  imports: [],
  templateUrl: './tree-container-adapter.component.html',
  styleUrl: './tree-container-adapter.component.css'
})
export class TreeContainerAdapterComponent {
  @Input() container!: ReTreeChildrenContainer<any>


}
