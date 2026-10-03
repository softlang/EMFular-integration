import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeBasedChooser } from './tree-based-chooser';
import {DummyReferencable} from "../../test/dummy-referencable";
import {ModelService} from "../../model.service";

describe('TreeCanvasComponent', () => {
  let component: TreeBasedChooser<DummyReferencable>;
  let fixture: ComponentFixture<TreeBasedChooser<DummyReferencable>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeBasedChooser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeBasedChooser<DummyReferencable>);
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
