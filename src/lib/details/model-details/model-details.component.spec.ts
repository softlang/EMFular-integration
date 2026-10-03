import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDetailsComponent } from './model-details.component';
import {ModelService} from "../../model.service";
import {DemoElement1, DemoElement2} from "../../test/running-example/demo-model";
import {DetailsService} from "../details-service";
import {ReTreeChildrenContainer} from "emfular-core";

describe('ModelDetailsComponent', () => {
  let component: ModelDetailsComponent<DemoElement2, DemoElement1>;
  let fixture: ComponentFixture<ModelDetailsComponent<DemoElement2, DemoElement1>>;
  let modelService: ModelService<DemoElement1>;
  let detailsService: DetailsService<DemoElement1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelDetailsComponent]
    })
    .compileComponents();

    modelService = {
      saveCurrentState: vi.fn()
    } as unknown as ModelService<DemoElement1>;

    detailsService = {
      openTreeReferenceChoice: vi.fn()
    } as unknown as DetailsService<DemoElement1>;

    const elem = new DemoElement1()
    const child = new DemoElement2()
    elem.children.push(child)

    fixture = TestBed.createComponent(ModelDetailsComponent<DemoElement2, DemoElement1>);
    component = fixture.componentInstance;
    component.model = child
    component.modelService = modelService
    component.detailsService = detailsService
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do nothing when parent selection is cancelled', () => {
    vi.mocked(detailsService.openTreeReferenceChoice).mockReturnValue(of(undefined));
    component.chooseParent();
    expect(modelService.saveCurrentState).not.toHaveBeenCalled();
  });

  it('should save the current state when the selected parent accepts the model element', () => {
    const parent = {
      add: vi.fn().mockReturnValue(true)
    } as unknown as ReTreeChildrenContainer<any>;
    vi.mocked(detailsService.openTreeReferenceChoice).mockReturnValue(of(parent));
    component.chooseParent();
    expect(parent.add).toHaveBeenCalledWith(component.model);
    expect(modelService.saveCurrentState).toHaveBeenCalled();
  });

  it('should not save the current state when the selected parent rejects the model element', () => {
    const parent = {
      add: vi.fn().mockReturnValue(false)
    } as unknown as ReTreeChildrenContainer<any>;
    vi.mocked(detailsService.openTreeReferenceChoice).mockReturnValue(of(parent));
    component.chooseParent();
    expect(parent.add).toHaveBeenCalledWith(component.model);
    expect(modelService.saveCurrentState).not.toHaveBeenCalled();
  });
});
