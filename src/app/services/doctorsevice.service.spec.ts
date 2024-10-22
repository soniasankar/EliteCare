import { TestBed } from '@angular/core/testing';

import { DoctorseviceService } from './doctorsevice.service';

describe('DoctorseviceService', () => {
  let service: DoctorseviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorseviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
