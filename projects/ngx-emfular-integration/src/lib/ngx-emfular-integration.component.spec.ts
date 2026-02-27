import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEmfularIntegrationComponent } from './ngx-emfular-integration.component';

describe('NgxEmfularIntegrationComponent', () => {
  let component: NgxEmfularIntegrationComponent;
  let fixture: ComponentFixture<NgxEmfularIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxEmfularIntegrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxEmfularIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
