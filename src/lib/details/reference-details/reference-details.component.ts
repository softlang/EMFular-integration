import {Component, Input} from '@angular/core';
import {ReContainer, Referencable } from 'emfular-core';
import {NgForOf, NgIf} from "@angular/common";
import {ModelService} from "../../model.service";
import {DetailsService} from "../details-service";

@Component({
  selector: 'reference-details',
  imports: [
    NgForOf,
    NgIf,
  ],
  templateUrl: './reference-details.component.html',
  styleUrl: './reference-details.component.css'
})
export class ReferenceDetailsComponent<M extends Referencable<any>> {
  @Input() container!: ReContainer<any, any>
  @Input() isTree!: boolean
  @Input() modelService!: ModelService<M>
  @Input() detailsService!: DetailsService<M>  //todo just enforce interface?

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
          .openElementChoice(this.modelService)
          .subscribe(chosen => {
            if (!chosen) return; // user cancelled
            // todo what about type mismatches?
            if (this.container.add(chosen)) {
              this.modelService.saveCurrentState();
            }
          });
    }
  }

}
