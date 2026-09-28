import { Injectable } from '@angular/core';
import { Referencable, ReTreeChildrenContainer } from 'emfular-core';
import {ModelService} from "../model.service";
import {ModelDetailsComponent} from "./model-details/model-details.component";
import { Overlay } from '@angular/cdk/overlay';
import {TreeCanvasComponent} from "./tree-canvas/tree-canvas.component";
import {Observable} from "rxjs";
import {DetailsService} from "./details-service";
import {ModalInstance, ModalService} from "ngx-emfular-tool";

@Injectable({
  providedIn: 'root'
})
export class GraphicalTreeDetailsService<M extends Referencable<any>> implements DetailsService<M> {

  constructor(
      private readonly modalService: ModalService,
      private readonly overlay: Overlay
  ) { }

  //actually T must be somewhere on M
  openDetails<
      T extends Referencable<any>
  >(elem: T, modelService: ModelService<M>) {
    // instead of opening the generic ModeldetailsComponent you might like to consider opening a specific one
    //by determining the eClass and switching based on elem.$getEClass()
    const modalInstance: ModalInstance<ModelDetailsComponent<T, M>, void> =
        this.modalService.createModal(
            ModelDetailsComponent<T,M>,
            {
                hasBackdrop: true,
                backdropClass: 'cdk-overlay-dark-backdrop',
                panelClass: 'basic-details-panel',
                positionStrategy: this.overlay.position()
                    .global().centerHorizontally().centerVertically()
            }
        )
    modalInstance.componentRef.instance.model = elem
    modalInstance.componentRef.instance.modelService = modelService
    modalInstance.componentRef.instance.detailsService = this
  }

    openElementChoice(
        modelService: ModelService<M>
    ): Observable<Referencable<any>> {
        const modalInstance: ModalInstance<TreeCanvasComponent<M>, Referencable<any>> =
            this.modalService.createModal(
                TreeCanvasComponent<M>,
                {
                    hasBackdrop: true,
                    backdropClass: 'cdk-overlay-dark-backdrop',
                    panelClass: 'basic-details-panel',
                    positionStrategy: this.overlay.position()
                        .global().centerHorizontally().centerVertically()
                }
            )
        modalInstance.componentRef.instance.modelService = modelService
        modalInstance.componentRef.instance.chooseElement.subscribe(chosen => {
            modalInstance.ref.close(chosen);
        });
        return modalInstance.ref.closed
    }

    openTreeReferenceChoice(
        modelService: ModelService<M>
    ): Observable<ReTreeChildrenContainer<any>> {
        const modalInstance: ModalInstance<TreeCanvasComponent<M>, ReTreeChildrenContainer<any>> =
            this.modalService.createModal(
                TreeCanvasComponent<M>,
                {
                    hasBackdrop: true,
                    backdropClass: 'cdk-overlay-dark-backdrop',
                    panelClass: 'basic-details-panel',
                    positionStrategy: this.overlay.position()
                        .global().centerHorizontally().centerVertically()
                }
            )
        modalInstance.componentRef.instance.modelService = modelService
        modalInstance.componentRef.instance.chooseReference.subscribe(chosen => {
            modalInstance.ref.close(chosen);
        });
        return modalInstance.ref.closed
    }

}
