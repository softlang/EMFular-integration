import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainEditorBarComponent } from './main-editor-bar.component';
import { DummyReferencable } from '../../test/dummy-referencable';

import { ModelServiceStub } from '../../test/model-service-stub';
import { createTestSvg } from '../../test/svg-test-utils';

describe('FileLevelBarComponent', () => {
  let component: MainEditorBarComponent<DummyReferencable>;
  let fixture: ComponentFixture<MainEditorBarComponent<DummyReferencable>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainEditorBarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MainEditorBarComponent<DummyReferencable>);
    component = fixture.componentInstance;

    component.modelService = new ModelServiceStub<DummyReferencable>() as any;
    component.svg = createTestSvg();

    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
