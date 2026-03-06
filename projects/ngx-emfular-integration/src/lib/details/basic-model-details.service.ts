import { Injectable } from '@angular/core';
import { Referencable } from 'emfular';
import {ModelService} from "../model.service";
import {ModelDetailsComponent} from "./model-details/model-details.component";
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class BasicModelDetailsService {

  constructor( private overlay: Overlay) { }

  //actually T must be somewhere on M
  openDetails<
      T extends Referencable<any>,
      M extends Referencable<any>
  >(elem: T, modelService: ModelService<M>) {
    // instead of opening the generic ModeldetailsCompoennt you might like to consider opening a specific one
    //by determining the eClass and switching based on that
    console.log("open details: "+elem.getEClass())

    const overlayRef = this.overlay.create(
        { hasBackdrop: true,
          backdropClass: 'cdk-overlay-dark-backdrop',
          panelClass: 'basic-details-panel',
          positionStrategy: this.overlay.position()
              .global() .centerHorizontally() .centerVertically()
        });
    const portal = new ComponentPortal(ModelDetailsComponent<T,M>);
    const ref = overlayRef.attach(portal);
    ref.instance.model = elem;
    ref.instance.modelService = modelService;
    overlayRef.backdropClick().subscribe(
        () => overlayRef.dispose()
    );
  }

}
