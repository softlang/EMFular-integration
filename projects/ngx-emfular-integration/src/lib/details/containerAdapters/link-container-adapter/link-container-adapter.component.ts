import {Component, Input} from '@angular/core';
import { ReLinkContainer } from 'emfular';

@Component({
  selector: 'link-container-adapter',
  imports: [],
  templateUrl: './link-container-adapter.component.html',
  styleUrl: './link-container-adapter.component.css'
})
export class LinkContainerAdapterComponent {
  @Input() container!: ReLinkContainer<any, any>

}
