import { TestBed } from '@angular/core/testing';

import { CategoriaRepositoryService } from './categoria-repository.service';

describe('CategoriaRepositoryService', () => {
  let service: CategoriaRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
