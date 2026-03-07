import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ReContainer, Referencable } from 'emfular';
import {GraphicalHelper} from "../../utils/graphical-helper";
import {NgForOf} from "@angular/common";
import {IdHelper} from "../../utils/id-helper";
import {ModelService} from "../../model.service";

@Component({
  selector: 'container-details',
  imports: [
    NgForOf,
  ],
  templateUrl: './container-details.component.html',
  styleUrl: './container-details.component.css'
})
export class ContainerDetailsComponent {
  @Input() container!: ReContainer<any, any>
  @Input() modelService!: ModelService<any>
  @Input() isTree!: boolean
  @Output() openDetail = new EventEmitter<Referencable<any>>();

  open(ref: Referencable<any>) {
    this.openDetail.emit(ref);
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
      //todo
    }
  }

  protected readonly GraphicalHelper = GraphicalHelper;
  protected readonly IdHelper = IdHelper;
}
