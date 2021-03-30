import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Categoria';
import { Incidencia } from '../Incidencia';
import { CATEGORIAS } from '../mock-categorias';

@Component({
  selector: 'app-edit-incidencia',
  templateUrl: './edit-incidencia.component.html',
  styleUrls: ['./edit-incidencia.component.scss']
})
export class EditIncidenciaComponent implements OnInit {
  categorias?: Categoria[];

  incidencia: Incidencia = {
    id: 1,
    description: '',
    userId: 0,
    photo_path: '',
    categoriaId: 0
  };

  constructor() { }

  ngOnInit(): void {
    this.categorias = CATEGORIAS;
    console.log(this.categorias);
  }

  save() {
    console.log(this.incidencia);
    localStorage.setItem('incidencia', JSON.stringify(this.incidencia));
  }

}
