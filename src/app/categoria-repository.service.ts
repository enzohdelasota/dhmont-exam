import { Injectable } from '@angular/core';
import { Categoria } from './Categoria';
import { CATEGORIAS } from './mock-categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriaRepositoryService {

  constructor() { }

  getAll(): Categoria[] {
    return CATEGORIAS;
  }

  get(id?: number) {
    if (id) {
      let categoria = CATEGORIAS.find(it => it.id === id);
    return categoria;
    }
    return null;
  }
}
