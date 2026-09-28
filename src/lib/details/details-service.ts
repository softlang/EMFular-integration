import { Referencable, ReTreeChildrenContainer } from "emfular-core";
import {ModelService} from "../model.service";
import {Observable} from "rxjs";

export interface DetailsService<M extends Referencable<any>> {

    //actually T must be somewhere on M
    openDetails<T extends Referencable<any>>(
        elem: T,
        modelService: ModelService<M>
    ): void
    // instead of opening the generic ModelDetailsComponent you might like to consider opening a specific one
    //by determining the eClass and switching based on elem.$getEClass()

    openElementChoice(
        modelService: ModelService<M>
    ): Observable<Referencable<any>>

    //does not choose a model element but a tree reference (containment)
    openTreeReferenceChoice(
        modelService: ModelService<M>
    ): Observable<ReTreeChildrenContainer<any>>

}
