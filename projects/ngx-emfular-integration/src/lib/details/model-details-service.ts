import { Referencable, ReTreeChildrenContainer } from "emfular";
import {ModelService} from "../model.service";
import {Observable} from "rxjs";

export interface ModelDetailsService<M extends Referencable<any>> {

    //actually T must be somewhere on M
    openDetails<T extends Referencable<any>>(
        elem: T,
        modelService: ModelService<M>
    ): void
    // instead of opening the generic ModeldetailsCompoennt you might like to consider opening a specific one
    //by determining the eClass and switching based on elem.getEClass()

    openModelChoice(
        modelService: ModelService<M>
    ): Observable<Referencable<any>>

    openParentChoice(
        modelService: ModelService<M>
    ): Observable<ReTreeChildrenContainer<any>>

}
