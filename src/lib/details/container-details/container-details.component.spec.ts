import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDetailsComponent } from './container-details.component';
import {DummyReferencable} from "../../test/dummy-referencable";

describe('ContainerDetailsComponent', () => {
  let component: ContainerDetailsComponent<DummyReferencable>;
  let fixture: ComponentFixture<ContainerDetailsComponent<DummyReferencable>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerDetailsComponent<DummyReferencable>);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
