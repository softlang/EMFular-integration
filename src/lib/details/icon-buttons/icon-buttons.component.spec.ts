import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconButtonsComponent } from './icon-buttons.component';
import {afterEach} from "vitest";

describe('IconButtonsComponent', () => {
  let component: IconButtonsComponent;
  let fixture: ComponentFixture<IconButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconButtonsComponent);
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
