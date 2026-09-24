import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDetailsComponent } from './container-details.component';
import {DemoElement1, DemoElement2} from "../../test/running-example/demo-model";
import {DemoModelService} from "../../test/running-example/demo-model.service";
import {TreeModelDetailsService} from "../tree-model-details.service";

describe('ContainerDetailsComponent', () => {
  let component: ContainerDetailsComponent<DemoElement1>;
  let fixture: ComponentFixture<ContainerDetailsComponent<DemoElement1>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerDetailsComponent]
    })
    .compileComponents();

    const elem = new DemoElement1()
    const child = new DemoElement2()
    elem.children.push(child)

    fixture = TestBed.createComponent(ContainerDetailsComponent<DemoElement1>);
    component = fixture.componentInstance;
    component.container = elem.$treeChildren[0]
    component.isTree = true;
    component.modelService = {} as DemoModelService;
    component.detailsService = {} as TreeModelDetailsService<DemoElement1>;
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
