import { TestBed } from '@angular/core/testing';

import { SecondGuardService } from './second-guard.service';

describe('SecondGuardService', () => {
  let service: SecondGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
