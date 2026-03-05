import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencableBoxComponent } from './referencable-box.component';
import {DummyReferencable} from "../../test/dummy-referencable";

describe('ReferencableBoxComponent', () => {
  let component: ReferencableBoxComponent;
  let fixture: ComponentFixture<ReferencableBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferencableBoxComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ReferencableBoxComponent);
    component = fixture.componentInstance;
    component.referencable = new DummyReferencable()
    component.position = {
      x:5,
      y: 10,
      w: 50,
      h: 20
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
