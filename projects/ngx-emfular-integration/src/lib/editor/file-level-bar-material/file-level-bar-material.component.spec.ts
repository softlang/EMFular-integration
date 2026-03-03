import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileLevelBarMaterialComponent } from './file-level-bar-material.component';
import { DummyReferencable } from '../../test/dummy-referencable';

import { ModelServiceStub } from '../../test/model-service-stub';
import { createTestSvg } from '../../test/svg-test-utils';

describe('FileLevelBarMaterialComponent', () => {
  let component: FileLevelBarMaterialComponent<DummyReferencable>;
  let fixture: ComponentFixture<FileLevelBarMaterialComponent<DummyReferencable>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileLevelBarMaterialComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FileLevelBarMaterialComponent<DummyReferencable>);
    component = fixture.componentInstance;

    component.modelService = new ModelServiceStub<DummyReferencable>() as any;
    component.svg = createTestSvg();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
