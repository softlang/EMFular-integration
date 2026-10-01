import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Referencable, ReTreeChildrenContainer} from 'emfular-core';
import {
  ArrowBetweenElemsComponent,
  BoundingBox,
  DraggableDirective,
  RectangleComponent,
  TextAreaSvgComponent
} from 'ngx-emfular-diagram';
import {NgTemplateOutlet} from "@angular/common";
import {ReferenceModel} from "../reference-model";
import {ExpandToggleComponent} from "../toggle-expand/toggle-expand.component";

@Component({
  selector: '[referencable-box]',
  imports: [
    RectangleComponent,
    TextAreaSvgComponent,
    ArrowBetweenElemsComponent,
    NgTemplateOutlet,
    DraggableDirective,
    ExpandToggleComponent,
  ],
  templateUrl: './referencable-box.component.svg',
  styleUrl: './referencable-box.component.css'
})
export class ReferencableBoxComponent implements OnChanges {
  @Input() referencable!: Referencable<any>;
  @Input() position!: BoundingBox
  @Input() color?: string = "rgba(126,117,117,0.5)"
  @Input() referenceColor?: string = "rgba(126,117,117,0.2)"
  @Output() chooseElement: EventEmitter<Referencable<any>> = new EventEmitter();
  @Output() chooseReference: EventEmitter<ReTreeChildrenContainer<any>> = new EventEmitter();

  isExpanded = true;
  references: ReferenceModel[] = [];

  constructor() {}


  ngOnChanges(changes: SimpleChanges) {
    if (changes.referencable) {
      this.references = this.createReferenceModels(this.referencable)
    }
  }

  private createReferenceModels(referencable: Referencable<any>): ReferenceModel[] {
    return this.referencable.$treeChildren.map(
        (container, i) => {
          return {
            id: referencable.$gId + '_' + container.referenceName,
            referenceName: container.referenceName,
            position: this.computeChildBBox(
                i,
                referencable.$treeChildren.length,
                this.position
            ),
            expanded: false,
            self: container,
            childrenPositionMap: new Map<string, BoundingBox>(),
          }
        }
    )
  }

  getOrCreateChildPosition(gId: string, index: number, referenceModel: ReferenceModel): BoundingBox {
    const  lookup: BoundingBox|undefined = referenceModel.childrenPositionMap.get(gId)
    if (lookup) {
      return lookup
    } else {
      const entry =  this.computeChildBBox(
          index,
          referenceModel.self.getAsList().length,
          referenceModel.position
      )
      referenceModel.childrenPositionMap.set(gId, entry)
      return entry
    }
  }

  private computeOffset(index: number, length: number): number {
    const middle = (length-1)/2;
    return index - middle;
  }

  private computeChildBBox(index: number, length: number, parentBox: BoundingBox): BoundingBox {
    return {
      x: parentBox.x + this.computeOffset(index, length)*(parentBox.w+5),
      y: parentBox.y+parentBox.h*2,
      w: parentBox.w,
      h: parentBox.h
    }
  }

  choose(element: Referencable<any>) {
    this.chooseElement.emit(element);
  }

  chooseRef(ref: ReTreeChildrenContainer<any>) {
    this.chooseReference.emit(ref)
  }

}
