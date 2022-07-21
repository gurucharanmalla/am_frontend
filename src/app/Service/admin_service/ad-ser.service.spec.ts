import { TestBed } from '@angular/core/testing';

import { AdSerService } from './ad-ser.service';

describe('AdSerService', () => {
  let service: AdSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
