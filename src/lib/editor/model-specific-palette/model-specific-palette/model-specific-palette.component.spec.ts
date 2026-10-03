import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSpecificPaletteComponent } from './model-specific-palette.component';

describe('ModelEditingBarComponent', () => {
  let component: ModelSpecificPaletteComponent;
  let fixture: ComponentFixture<ModelSpecificPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelSpecificPaletteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelSpecificPaletteComponent);
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
