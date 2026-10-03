import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicalComponent } from './graphical.component';

describe('GraphicalComponent', () => {
  let component: GraphicalComponent;
  let fixture: ComponentFixture<GraphicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
