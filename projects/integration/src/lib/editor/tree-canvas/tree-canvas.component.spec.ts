import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeCanvasComponent } from './tree-canvas.component';

describe('ModelCanvasComponent', () => {
  let component: TreeCanvasComponent;
  let fixture: ComponentFixture<TreeCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeCanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
