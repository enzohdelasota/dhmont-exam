import { Injectable } from '@angular/core';
import { Incidencia } from './Incidencia';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveIncidencia(incidencia: Incidencia) {
    let incidencias: Incidencia[] = [];
    if (localStorage.getItem('incidencias')) {
      incidencias = JSON.parse(localStorage.getItem('incidencias')!!);
    }
    incidencias.push(incidencia);
    localStorage.setItem('incidencias', JSON.stringify(incidencias));
  }
}
