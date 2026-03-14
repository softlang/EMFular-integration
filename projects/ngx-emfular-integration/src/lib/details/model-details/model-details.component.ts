import {Component, Input, OnInit} from '@angular/core';
import {AttributeOptions, Referencable, ReLinkContainer, ReTreeChildrenContainer } from 'emfular';
import {ModelService} from "../../model.service";
import { getAllAttributes } from "emfular";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {
  ContainerDetailsComponent
} from "../container-details/container-details.component";
import {ModelDetailsService} from "../model-details-service";
import {IdHelper} from "../../utils/id-helper";

@Component({
  selector: 'lib-model-details',
  imports: [
    FormsModule,
    NgForOf,
    ContainerDetailsComponent,
    NgIf
  ],
  templateUrl: './model-details.component.html',
  styleUrl: './model-details.component.css'
})
export class ModelDetailsComponent<T extends Referencable<any>, M extends Referencable<any>> implements OnInit {
  @Input() model!: T
  @Input() modelService!: ModelService<M>
  @Input() detailsService!: ModelDetailsService<M>

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

  chooseParent() {
    this.detailsService
        .openParentChoice(this.modelService)
        .subscribe(chosen => {
          if (!chosen) return; // user cancelled
          // todo what about type mismatches? and user should actually pick the container, not the parent
          let oldParent = this.model.parent
          if(chosen == oldParent) return;
          this.model.setParent(chosen)
          if (this.model.parent && this.model.parent != oldParent) { //todo should we catch wrong undefined setting?
            this.modelService.saveCurrentState();
          }
        });
  }

  protected readonly IdHelper = IdHelper;
}
