import {Referencable, ModelDefinition, eClass } from "emfular";

export const DummyMeta: ModelDefinition = {
    name: "dummy",
    prefix: "dummy",
    uri: "dummy//",
    classes: {
        DummyReferencable: {
            references: {}
        }
    }
}

@eClass(DummyMeta, "DummyReferencable")
export class DummyReferencable extends Referencable<any>{
    id = 'x';
    constructor() {
        super();
    }
}