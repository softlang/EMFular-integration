import {Referencable } from "emfular";

export class DummyReferencable extends Referencable<any>{
    id = 'x';
    constructor() {
        super();
    }
}