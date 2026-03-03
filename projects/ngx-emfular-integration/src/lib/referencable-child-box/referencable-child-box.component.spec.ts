import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencableChildBoxComponent } from './referencable-child-box.component';

describe('ReferencableChildBoxComponent', () => {
  let component: ReferencableChildBoxComponent;
  let fixture: ComponentFixture<ReferencableChildBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferencableChildBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferencableChildBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
