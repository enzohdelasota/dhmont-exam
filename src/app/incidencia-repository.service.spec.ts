import { TestBed } from '@angular/core/testing';

import { IncidenciaRepositoryService } from './incidencia-repository.service';

describe('IncidenciaRepositoryService', () => {
  let service: IncidenciaRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidenciaRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
