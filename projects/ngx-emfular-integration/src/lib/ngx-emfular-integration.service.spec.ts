import { TestBed } from '@angular/core/testing';

import { NgxEmfularIntegrationService } from './ngx-emfular-integration.service';

describe('NgxEmfularIntegrationService', () => {
  let service: NgxEmfularIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEmfularIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
