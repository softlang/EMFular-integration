import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeContainerAdapterComponent } from './tree-container-adapter.component';

describe('TreeContainerAdapterComponent', () => {
  let component: TreeContainerAdapterComponent;
  let fixture: ComponentFixture<TreeContainerAdapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeContainerAdapterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeContainerAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
