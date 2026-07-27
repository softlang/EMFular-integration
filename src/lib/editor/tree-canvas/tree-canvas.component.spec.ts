import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeCanvasComponent } from './tree-canvas.component';
import {DummyReferencable} from "../../test/dummy-referencable";

describe('ModelCanvasComponent', () => {
  let component: TreeCanvasComponent<DummyReferencable>;
  let fixture: ComponentFixture<TreeCanvasComponent<DummyReferencable>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeCanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeCanvasComponent<DummyReferencable>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
