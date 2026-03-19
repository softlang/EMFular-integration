import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BoundingBox } from 'ngx-svg-graphics';

@Injectable()
export class VisibleNodeRegistry {
  private bboxById = new Map<string, BoundingBox>();
  private manualPositionById = new Map<string, BoundingBox>();

  private _changes = new BehaviorSubject<void>(undefined);
  changes$ = this._changes.asObservable();

  private emitChange(): void {
    this._changes.next();
  }

  touch(): void {
    this.emitChange();
  }

  setBox(id: string, bbox: BoundingBox): void {
    this.bboxById.set(id, { ...bbox });
    this._changes.next();
  }

  setDraggedBox(id: string, bbox: BoundingBox): void {
    const copy = { ...bbox };
    this.manualPositionById.set(id, copy);
    this.bboxById.set(id, copy);
    this._changes.next();
  }

  getBox(id: string): BoundingBox | undefined {
    return this.bboxById.get(id);
  }

  remove(id: string): void {
    this.bboxById.delete(id);
    this.manualPositionById.delete(id);
    this._changes.next();
  }

  clear(): void {
    this.bboxById.clear();
    this.manualPositionById.clear();
    this._changes.next();
  }

  setManualPosition(id: string, bbox: BoundingBox): void {
    this.manualPositionById.set(id, { ...bbox });
    this._changes.next();
  }

  getManualPosition(id: string): BoundingBox | undefined {
    return this.manualPositionById.get(id);
  }

  hasManualPosition(id: string): boolean {
    return this.manualPositionById.has(id);
  }

  clearManualPosition(id: string): void {
    this.manualPositionById.delete(id);
    this._changes.next();
  }

  resolvePosition(id: string, fallback: BoundingBox): BoundingBox {
    return this.manualPositionById.get(id) ?? fallback;
  }
}