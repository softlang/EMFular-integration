import {eClass, ModelDefinition, ModelList, Referencable, reference, ReferenceMeta} from "emfular-core";

export const elem1Refs = {
    children: {
        target: "DemoElement2",
        containment: true,
        min: 0,
        max: -1,
    } satisfies ReferenceMeta
}

export const DemoElementMeta: ModelDefinition = {
    name: "demo",
    prefix: "demo",
    uri: "demo//",
    classes: {
        DemoElement1: {
            references: elem1Refs
        }
    }
}

@eClass(DemoElementMeta, "DemoElement1")
export class DemoElement1 extends Referencable<any>{

    constructor() {
        super();
    }

    @reference(elem1Refs.children)
    declare children: ModelList<DemoElement2>
}

@eClass(DemoElementMeta, "DemoElement1")
export class DemoElement2 extends Referencable<any>{

    constructor() {
        super();
    }

}