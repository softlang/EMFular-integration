import {ReContainer, Referencable } from "emfular-core";

export class GraphicalHelper {

    //todo, refactor into emfular
    static getAsList<T extends Referencable<any>>(refs: ReContainer<T, any>): T[] {
        const items: T[]|T|undefined = refs.get()
        if(items) {
            if(Array.isArray(items)) {
                return items
            }
            const result: T[] = [];
            result.push(items)
            return result
        } else {
            return [];
        }
    }

}
