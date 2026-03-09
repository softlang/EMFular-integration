import {Component, Input} from '@angular/core';
import {ReContainer, Referencable } from 'emfular';
import {GraphicalHelper} from "../../utils/graphical-helper";
import {NgForOf, NgIf} from "@angular/common";
import {IdHelper} from "../../utils/id-helper";
import {ModelService} from "../../model.service";
import {ModelDetailsService} from "../model-details-service";

@Component({
  selector: 'container-details',
  imports: [
    NgForOf,
    NgIf,
  ],
  templateUrl: './container-details.component.html',
  styleUrl: './container-details.component.css'
})
export class ContainerDetailsComponent<M extends Referencable<any>> {
  @Input() container!: ReContainer<any, any>
  @Input() isTree!: boolean
  @Input() modelService!: ModelService<M>
  @Input() detailsService!: ModelDetailsService<M>  //todo just enforce interface?

  open(ref: Referencable<any>) {
    this.detailsService.openDetails(ref, this.modelService)
  }

  remove(ref: Referencable<any>) {
    //todo service should do this... in order for single source of truth
    if(this.container.remove(ref))
      this.modelService.saveCurrentState()
  }

  add() {
    //create on tree and open choice by graphical model on other links
    if(this.isTree) {
      console.log("Creation for several possible sub types is not solved in a meta-agnostic scenario")
    } else {
      this.detailsService
          .openModelChoice(this.modelService)
          .subscribe(chosen => {
            if (!chosen) return; // user cancelled
            // todo what about type mismatches?
            if (this.container.add(chosen)) {
              this.modelService.saveCurrentState();
            }
          });
    }
  }

  protected readonly GraphicalHelper = GraphicalHelper;
  protected readonly IdHelper = IdHelper;
}
