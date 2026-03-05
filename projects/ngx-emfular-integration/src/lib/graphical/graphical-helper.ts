import {ReContainer, Referencable } from "emfular";
import { BoundingBox } from "ngx-svg-graphics";

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

    static computeOffset(index: number, length: number): number {
        const middle = (length-1)/2;
        return index - middle;
    }

    static  computeChildBBox(index: number, length: number, parentBox: BoundingBox): BoundingBox {
        return {
            x: parentBox.x + GraphicalHelper.computeOffset(index, length)*(parentBox.w+5),
            y: parentBox.y+parentBox.h*2,
            w: parentBox.w,
            h: parentBox.h
        }
    }
}
