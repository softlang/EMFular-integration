import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCanvasComponent } from './model-canvas.component';

describe('ModelCanvasComponent', () => {
  let component: ModelCanvasComponent;
  let fixture: ComponentFixture<ModelCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelCanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelCanvasComponent);
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
