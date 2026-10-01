import {BoundingBox} from "ngx-emfular-diagram";
import {Referencable, ReTreeChildrenContainer} from "emfular-core";

export interface ReferenceModel {
    id: string;
    referenceName: string
    position: BoundingBox
    expanded: boolean;
    self: ReTreeChildrenContainer<Referencable<any>>;
    childrenPositionMap: Map<string, BoundingBox>
}