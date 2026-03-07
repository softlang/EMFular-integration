import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDetailsComponent } from './model-details.component';

describe('ModelDetailsComponent', () => {
  let component: ModelDetailsComponent<any, any>;
  let fixture: ComponentFixture<ModelDetailsComponent<any, any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
