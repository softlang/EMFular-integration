import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileLevelBarComponent } from './file-level-bar.component';
import { DummyReferencable } from '../../test/dummy-referencable';

import { ModelServiceStub } from '../../test/model-service-stub';
import { createTestSvg } from '../../test/svg-test-utils';

describe('FileLevelBarComponent', () => {
  let component: FileLevelBarComponent<DummyReferencable>;
  let fixture: ComponentFixture<FileLevelBarComponent<DummyReferencable>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileLevelBarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FileLevelBarComponent<DummyReferencable>);
    component = fixture.componentInstance;

    component.modelService = new ModelServiceStub<DummyReferencable>() as any;
    component.svg = createTestSvg();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
