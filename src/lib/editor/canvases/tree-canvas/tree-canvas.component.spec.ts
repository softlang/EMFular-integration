import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeCanvasComponent } from './tree-canvas.component';
import {DummyReferencable} from "../../../test/dummy-referencable";
import {ModelService} from "../../../model.service";

describe('TreeCanvasComponent', () => {
  let component: TreeCanvasComponent<DummyReferencable>;
  let fixture: ComponentFixture<TreeCanvasComponent<DummyReferencable>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeCanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeCanvasComponent<DummyReferencable>);
    component = fixture.componentInstance;
    const model = new DummyReferencable()
    const modelService = {
      get model(): DummyReferencable { return model
      }
    } as ModelService<DummyReferencable>
    component.modelService = modelService
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
