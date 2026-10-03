import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeModelElementComponent } from './tree-model-element.component';
import {DummyReferencable} from "../../test/dummy-referencable";

describe('ReferencableBoxComponent', () => {
  let component: TreeModelElementComponent;
  let fixture: ComponentFixture<TreeModelElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeModelElementComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TreeModelElementComponent);
    component = fixture.componentInstance;
    component.referencable = new DummyReferencable()
    component.position = {
      x:5,
      y: 10,
      w: 50,
      h: 20
    }
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
