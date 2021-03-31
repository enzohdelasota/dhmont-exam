import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  changeState(incidencia: Incidencia) {
    this.localSourceData.changeState(incidencia);
  }

  getAll(): Incidencia[] {
    let incidencias = this.localSourceData.loadIncidencias();
    return incidencias;
  }

  getAll$(): Observable<Incidencia[]> {
    return this.localSourceData.getIncidencias$();
  }
}
