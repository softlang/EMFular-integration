import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEditorComponent } from './basic-editor.component';
import {DummyReferencable} from "../../test/dummy-referencable";

describe('BasicEditorComponent', () => {
  let component: BasicEditorComponent<DummyReferencable>;
  let fixture: ComponentFixture<BasicEditorComponent<DummyReferencable>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicEditorComponent<DummyReferencable>);
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
