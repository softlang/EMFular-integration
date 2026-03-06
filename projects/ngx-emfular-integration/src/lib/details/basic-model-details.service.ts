import { Injectable } from '@angular/core';
import { Referencable } from 'emfular';
import {ModelService} from "../model.service";

@Injectable({
  providedIn: 'root'
})
export class BasicModelDetailsService {

  constructor() { }

  //actually T must be somewhere on M
  openDetails<
      T extends Referencable<any>,
      M extends Referencable<any>
  >(elem: T, modelService: ModelService<M>) {
    // instead of opening the generic ModeldetailsCompoennt you might like to consider opening a specific one
    //by determining the eClass and switching based on that
    console.log("open details: "+elem.getEClass())
  }

}
