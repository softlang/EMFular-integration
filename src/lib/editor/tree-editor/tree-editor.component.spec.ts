import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeEditorComponent } from './tree-editor.component';
import {DummyReferencable} from "../../test/dummy-referencable";

describe('TreeEditorComponent', () => {
  let component: TreeEditorComponent<DummyReferencable>;
  let fixture: ComponentFixture<TreeEditorComponent<DummyReferencable>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeEditorComponent<DummyReferencable>);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
