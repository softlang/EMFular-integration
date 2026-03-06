import {Component, Input, OnInit} from '@angular/core';
import {AttributeOptions, Referencable } from 'emfular';
import {ModelService} from "../../model.service";
import { getAllAttributes } from "emfular";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'lib-model-details',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './model-details.component.html',
  styleUrl: './model-details.component.css'
})
export class ModelDetailsComponent<T extends Referencable<any>, M extends Referencable<any>> implements OnInit {
  @Input() model!: T
  @Input() modelService!: ModelService<M>

  attributes: Array<{ key: string; options: AttributeOptions }> = [];

  ngOnInit() {
    const map = getAllAttributes(this.model.constructor);
    this.attributes = Array.from(map.entries()).map(([key, options]) => ({
      key,
      options
    }));
  }
}
