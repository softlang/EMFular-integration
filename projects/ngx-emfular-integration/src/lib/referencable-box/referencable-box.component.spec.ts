import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencableBoxComponent } from './referencable-box.component';

describe('ReferencableBoxComponent', () => {
  let component: ReferencableBoxComponent;
  let fixture: ComponentFixture<ReferencableBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferencableBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferencableBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
