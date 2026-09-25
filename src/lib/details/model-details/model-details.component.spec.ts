import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDetailsComponent } from './model-details.component';
import {ModelService} from "../../model.service";
import {DemoElement1, DemoElement2} from "../../test/running-example/demo-model";

describe('ModelDetailsComponent', () => {
  let component: ModelDetailsComponent<DemoElement2, DemoElement1>;
  let fixture: ComponentFixture<ModelDetailsComponent<DemoElement2, DemoElement1>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelDetailsComponent]
    })
    .compileComponents();

    const elem = new DemoElement1()
    const child = new DemoElement2()
    elem.children.push(child)

    fixture = TestBed.createComponent(ModelDetailsComponent<DemoElement2, DemoElement1>);
    component = fixture.componentInstance;
    component.model = child
    component.modelService = {} as ModelService<DemoElement1>
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
