import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Incidencia } from './Incidencia';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
    let incidenciaId = localStorage.getItem('incidenciaId');
    if (!incidenciaId) {
      localStorage.setItem('incidenciaId', '0');
    }
  }

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
    let id: number = +localStorage.getItem('incidenciaId')!!;
    incidencia.id = id + 1;

    let incidencias: Incidencia[] = [];
    if (localStorage.getItem('incidencias')) {
      incidencias = JSON.parse(localStorage.getItem('incidencias')!!);
    }

    incidencias.push(incidencia);
    localStorage.setItem('incidencias', JSON.stringify(incidencias));
    localStorage.setItem('incidenciaId', `${id + 1}`);

    this.incidencias$.next(this.loadIncidenciasByUser(incidencia.user));
  }

  changeState(incidencia: Incidencia) {
    let incidencias: Incidencia[] = JSON.parse(localStorage.getItem('incidencias')!!);
    console.log(incidencias.filter(it => it.id === incidencia.id))
    let newList = incidencias.map(it => (it.id === incidencia.id) ? incidencia : it);
    localStorage.setItem('incidencias', JSON.stringify(newList));
  }

  loadIncidencias(): Incidencia[] {
    let incidencias: Incidencia[] = [];
    if (localStorage.getItem('incidencias')) {
      incidencias = JSON.parse(localStorage.getItem('incidencias')!!);
    }
    return incidencias;
  }

  loadIncidenciasByUser(user: string): Incidencia[] {
    let incidencias: Incidencia[] = [];
    if (localStorage.getItem('incidencias')) {
      incidencias = JSON.parse(localStorage.getItem('incidencias')!!);
    }
    return incidencias.filter(it => it.user === user);
  }

  private incidencias$ = new Subject<Incidencia[]>();

  getIncidencias$(): Observable<Incidencia[]> {
    return this.incidencias$.asObservable();
  }
}
