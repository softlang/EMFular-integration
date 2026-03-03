import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileLevelBarMaterialComponent } from './file-level-bar-material.component';
import {DummyReferencable} from "../../test/dummy-referencable";

describe('FileLevelBarComponent', () => {
  let component: FileLevelBarMaterialComponent<DummyReferencable>;
  let fixture: ComponentFixture<FileLevelBarMaterialComponent<DummyReferencable>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileLevelBarMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileLevelBarMaterialComponent<DummyReferencable>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
