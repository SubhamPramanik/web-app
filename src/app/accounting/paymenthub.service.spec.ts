import { TestBed } from '@angular/core/testing';

import { PaymenthubService } from './paymenthub.service';

describe('PaymenthubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymenthubService = TestBed.get(PaymenthubService);
    expect(service).toBeTruthy();
  });
});
