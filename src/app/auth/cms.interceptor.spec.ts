import { TestBed } from '@angular/core/testing';

import { CmsInterceptor } from './cms.interceptor';

describe('CmsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CmsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CmsInterceptor = TestBed.inject(CmsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
