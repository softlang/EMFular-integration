import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AttributeOptions, Referencable, ReLinkContainer, ReTreeChildrenContainer } from 'emfular';
import {ModelService} from "../../model.service";
import { getAllAttributes } from "emfular";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {
  ContainerDetailsComponent
} from "../container-details/container-details.component";
import {BasicModelDetailsService} from "../basic-model-details.service";

@Component({
  selector: 'lib-model-details',
  imports: [
    FormsModule,
    NgForOf,
    ContainerDetailsComponent
  ],
  templateUrl: './model-details.component.html',
  styleUrl: './model-details.component.css'
})
export class ModelDetailsComponent<T extends Referencable<any>, M extends Referencable<any>> implements OnInit {
  @Input() model!: T
  @Input() modelService!: ModelService<M>
  @Input() detailsService!: BasicModelDetailsService

  attributes: Array<{ key: string; options: AttributeOptions }> = [];

  ngOnInit() {
    const map = getAllAttributes(this.model.constructor);
    this.attributes = Array.from(map.entries()).map(([key, options]) => ({
      key,
      options
    }));
  }
  
  getLinks(): ReLinkContainer<any, any>[] {
    return this.model.$otherReferences
  }

  getChildren(): ReTreeChildrenContainer<any>[] {
    return this.model.$treeChildren
  }

}
