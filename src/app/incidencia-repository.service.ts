import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Incidencia } from './Incidencia';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaRepositoryService {

  constructor(
    private localSourceData: LocalStorageService,
    private authService: AuthService,
    ) { }

  save(incidencia: Incidencia) {
    this.localSourceData.saveIncidencia(incidencia);

  }

  changeState(incidencia: Incidencia) {
    this.localSourceData.changeState(incidencia);
  }

  getAll(): Incidencia[] {
    let incidencias = [];
    if (this.authService.isAdmin()) {
      incidencias = this.localSourceData.loadIncidencias();
      return incidencias;
    }
    incidencias = this.localSourceData.loadIncidenciasByUser(this.authService.userName);
    return incidencias;
  }

  getAll$(): Observable<Incidencia[]> {
    return this.localSourceData.getIncidencias$();
  }
}
