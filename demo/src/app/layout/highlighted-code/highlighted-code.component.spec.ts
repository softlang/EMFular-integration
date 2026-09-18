import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedCodeComponent } from './highlighted-code.component';

describe('HighlightedCodeComponent', () => {
  let component: HighlightedCodeComponent;
  let fixture: ComponentFixture<HighlightedCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightedCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightedCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
