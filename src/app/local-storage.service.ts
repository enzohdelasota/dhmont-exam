import { Injectable } from '@angular/core';
import { Incidencia } from './Incidencia';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveUser(user: {}) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  loadUser() {
    let user = null;
    if (localStorage.getItem('user')) {
      user = JSON.parse(localStorage.getItem('user')!!);
    }
    return user;
  }

  removeUser() {
    localStorage.removeItem('user');
  }

  saveIncidencia(incidencia: Incidencia) {
    let incidencias: Incidencia[] = [];
    if (localStorage.getItem('incidencias')) {
      incidencias = JSON.parse(localStorage.getItem('incidencias')!!);
    }
    incidencias.push(incidencia);
    localStorage.setItem('incidencias', JSON.stringify(incidencias));
  }

  loadIncidencias(): Incidencia[] {
    let incidencias: Incidencia[] = [];
    if (localStorage.getItem('incidencias')) {
      incidencias = JSON.parse(localStorage.getItem('incidencias')!!);
    }
    return incidencias;
  }
}
