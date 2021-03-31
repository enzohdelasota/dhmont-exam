import { TestBed } from '@angular/core/testing';

import { LoginLoaderService } from './login-loader.service';

describe('LoginLoaderService', () => {
  let service: LoginLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
