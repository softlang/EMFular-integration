import {attribute, eClass, ModelDefinition, ModelList, Referencable, reference, ReferenceMeta} from "emfular-core";

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
    uri: "demo#//",
    classes: {
        DemoElement1: {
            references: elem1Refs
        },
        DemoElement2: {
            references: {}
        }
    }
}

@eClass(DemoElementMeta, "DemoElement1")
export class DemoElement1 extends Referencable<any>{

    constructor(name?: string) {
        super();
        this.name = name;
    }

    @attribute()
    name?: string;

    @reference(elem1Refs.children)
    declare children: ModelList<DemoElement2>
}

@eClass(DemoElementMeta, "DemoElement2")
export class DemoElement2 extends Referencable<any>{

    @attribute()
    id?: string;

    constructor(id?: string) {
        super();
        this.id = id;
    }

}