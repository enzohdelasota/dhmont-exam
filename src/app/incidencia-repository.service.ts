import { Injectable } from '@angular/core';
import { Incidencia } from './Incidencia';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaRepositoryService {

  constructor(private localSourceData: LocalStorageService) { }

  save(incidencia: Incidencia) {
    this.localSourceData.saveIncidencia(incidencia);
  }
}
