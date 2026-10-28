import {Component, Input, OnInit} from '@angular/core';
import {AttributeOptions, getAllAttributes, Referencable, ReTreeChildrenContainer} from 'emfular-core';
import {ModelService} from "../../model.service";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {ReferenceDetailsComponent} from "../reference-details/reference-details.component";
import {DetailsService} from "../details-service";
import {IconButtonsComponent} from "../icon-buttons/icon-buttons.component";
import {IconButtonType} from "../icon-buttons/icon-button-type";

@Component({
  selector: 'emfular-model-details',
  imports: [
    FormsModule,
    NgForOf,
    ReferenceDetailsComponent,
    NgIf,
    IconButtonsComponent
  ],
  templateUrl: './model-details.component.html',
  styleUrl: './model-details.component.css'
})
export class ModelDetailsComponent<T extends Referencable<any>, M extends Referencable<any>> implements OnInit {
  @Input() model!: T
  @Input() modelService!: ModelService<M>
  @Input() detailsService!: DetailsService<M>

  attributes: Array<{ key: string; options: AttributeOptions }> = [];

  ngOnInit() {
    const map = getAllAttributes(this.model.constructor);
    this.attributes = Array.from(map.entries()).map(([key, options]) => ({
      key,
      options
    }));
  }

  close() {
    console.log("Todo: close!")
  }

  chooseParent() {
    this.detailsService
        .openTreeReferenceChoice(this.modelService)
        .subscribe((chosen: ReTreeChildrenContainer<any>) => {
          if (!chosen) return; // user cancelled
          // todo what about type mismatches?
          const res = chosen.add(
              this.model
          )
          if (res) {
            this.modelService.saveCurrentState();
          }
        });
  }

  delete() {
    this.model.$destruct()
    this.modelService.saveCurrentState()
    this.close()
  }

  protected readonly IconButtonType = IconButtonType;
}
