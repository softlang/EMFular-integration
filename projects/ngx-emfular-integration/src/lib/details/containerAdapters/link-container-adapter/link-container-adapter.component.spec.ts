import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkContainerAdapterComponent } from './link-container-adapter.component';

describe('LinkContainerAdapterComponent', () => {
  let component: LinkContainerAdapterComponent;
  let fixture: ComponentFixture<LinkContainerAdapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkContainerAdapterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkContainerAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
