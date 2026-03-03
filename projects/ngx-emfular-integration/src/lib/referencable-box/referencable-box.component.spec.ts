import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencableBoxComponent } from './referencable-box.component';
import {DummyReferencable} from "../test/dummy-referencable";

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('static properties of ReferencableBoxComponent', () => {

  describe('computeOffset', () => {

    const cases: Array<[number, number, number]> = [
      // length 1
      [0, 1, 0],

      // length 2
      [0, 2, -0.5],
      [1, 2, 0.5],

      // length 3
      [0, 3, -1],
      [1, 3, 0],
      [2, 3, 1],

      // length 4
      [0, 4, -1.5],
      [1, 4, -0.5],
      [2, 4, 0.5],
      [3, 4, 1.5],
    ];

    cases.forEach(([index, length, expected]) => {
      it(`index=${index}, length=${length} → ${expected}`, () => {
        expect(ReferencableBoxComponent.computeOffset(index, length)).toBe(expected);
      });
    });
  });

});
