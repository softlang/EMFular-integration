import { Injectable } from '@angular/core';
import { Referencable, ReTreeChildrenContainer } from 'emfular';
import {ModelService} from "../model.service";
import {ModelDetailsComponent} from "./model-details/model-details.component";
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {TreeCanvasComponent} from "../editor/tree-canvas/tree-canvas.component";
import {Observable, Subject} from "rxjs";
import {ModelDetailsService} from "./model-details-service";

@Injectable({
  providedIn: 'root'
})
export class TreeModelDetailsService<M extends Referencable<any>> implements ModelDetailsService<M> {

  constructor( private overlay: Overlay) { }

  //actually T must be somewhere on M
  openDetails<
      T extends Referencable<any>
  >(elem: T, modelService: ModelService<M>) {
    // instead of opening the generic ModeldetailsCompoennt you might like to consider opening a specific one
    //by determining the eClass and switching based on elem.getEClass()

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
    ref.instance.detailsService = this
    overlayRef.backdropClick().subscribe(
        () => overlayRef.dispose()
    );
  }

    openModelChoice(
        modelService: ModelService<M>
    ): Observable<Referencable<any>> {

        const subject = new Subject<Referencable<any>>();

        const overlayRef = this.overlay.create({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-dark-backdrop',
            panelClass: 'basic-details-panel',
            positionStrategy: this.overlay.position()
                .global().centerHorizontally().centerVertically()
        });

        const portal = new ComponentPortal(TreeCanvasComponent<M>);
        const ref = overlayRef.attach(portal);

        ref.instance.modelService = modelService;
        ref.instance.chooseElement.subscribe(next => {
            subject.next(next);
            subject.complete();
            overlayRef.dispose();
        });

        overlayRef.backdropClick().subscribe(() => {
            subject.complete();
            overlayRef.dispose();
        });

        return subject.asObservable();
    }

    openParentChoice(
        modelService: ModelService<M>
    ): Observable<ReTreeChildrenContainer<any>> {
        const subject = new Subject<ReTreeChildrenContainer<any>>();

        const overlayRef = this.overlay.create({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-dark-backdrop',
            panelClass: 'basic-details-panel',
            positionStrategy: this.overlay.position()
                .global().centerHorizontally().centerVertically()
        });

        const portal = new ComponentPortal(TreeCanvasComponent<M>);
        const ref = overlayRef.attach(portal);

        ref.instance.modelService = modelService;
        ref.instance.chooseReference.subscribe(next => {
            subject.next(next);
            subject.complete();
            overlayRef.dispose();
        });

        overlayRef.backdropClick().subscribe(() => {
            subject.complete();
            overlayRef.dispose();
        });

        return subject.asObservable();
    }

}
