import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelEditingBarComponent } from './model-editing-bar.component';

describe('ModelEditingBarComponent', () => {
  let component: ModelEditingBarComponent;
  let fixture: ComponentFixture<ModelEditingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelEditingBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelEditingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
