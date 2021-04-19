import { TestBed } from '@angular/core/testing';

import { NetwortService } from './networt.service';

describe('NetwortService', () => {
  let service: NetwortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetwortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
