import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Categoria';
import { CategoriaRepositoryService } from '../categoria-repository.service';
import { Incidencia } from '../Incidencia';
import { IncidenciaRepositoryService } from '../incidencia-repository.service';
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

  constructor(
    private incidenciaRepository: IncidenciaRepositoryService,
    private categoriaRepository: CategoriaRepositoryService,
    ) { }

  ngOnInit(): void {
    this.categorias = this.categoriaRepository.getAll();
    console.log(this.categorias);
  }

  save() {
    this.incidenciaRepository.save(this.incidencia);
  }

}
