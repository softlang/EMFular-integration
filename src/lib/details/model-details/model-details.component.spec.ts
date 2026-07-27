import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDetailsComponent } from './model-details.component';
import {DummyReferencable} from "../../test/dummy-referencable";

describe('ModelDetailsComponent', () => {
  let component: ModelDetailsComponent<DummyReferencable, DummyReferencable>;
  let fixture: ComponentFixture<ModelDetailsComponent<DummyReferencable, DummyReferencable>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelDetailsComponent<DummyReferencable, DummyReferencable>);
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
