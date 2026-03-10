import {getAllAttributes, Referencable } from "emfular";

export class IdHelper {

    static getLabel(ref: Referencable<any>): string {
        // 1. If the model has a "name" attribute → use it
        if ((ref as any).name) {
            return `${(ref as any).name}`;
        }

        // 2. Otherwise: first primitive attribute
        const attrs = getAllAttributes(ref.constructor);
        for (const [key] of attrs) {
            const value = (ref as any)[key];
            if (typeof value === "string" || typeof value === "number") {
                return `${value}`;
            }
        }

        /*
        // 3. Otherwise: use ID (EMFular always has stable IDs)
        if ((ref as any).id) {
            return `(id=${(ref as any).id})`;
        }*/

        // 4. Otherwise: fallback
        return "(unnamed)";
    }

}
