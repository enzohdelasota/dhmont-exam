import { TestBed } from '@angular/core/testing';

import { FakeAuthenticatorService } from './fake-authenticator.service';

describe('FakeAuthenticatorService', () => {
  let service: FakeAuthenticatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeAuthenticatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
