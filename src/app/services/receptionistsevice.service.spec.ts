import { TestBed } from '@angular/core/testing';

import { ReceptionistseviceService } from './receptionistsevice.service';

describe('ReceptionistseviceService', () => {
  let service: ReceptionistseviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptionistseviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
