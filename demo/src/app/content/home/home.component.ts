import { Component } from '@angular/core';
import {HighlightedCodeComponent} from "../../layout/highlighted-code/highlighted-code.component";
import {runningExample} from "./home.component.code";

@Component({
  selector: 'demo-home',
    imports: [
        HighlightedCodeComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  protected readonly runningExample = runningExample;
}
