import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../Categoria';
import { CategoriaRepositoryService } from '../categoria-repository.service';
import { Incidencia } from '../Incidencia';
import { IncidenciaRepositoryService } from '../incidencia-repository.service';

@Component({
  selector: 'app-incidencias-list',
  templateUrl: './incidencias-list.component.html',
  styleUrls: ['./incidencias-list.component.scss']
})
export class IncidenciasListComponent implements OnInit {
  @Input() columns?: string[];

  incidencias: Incidencia[] = [];
  categorias: Categoria[] = [];

  constructor(
    private incidenciaRepository: IncidenciaRepositoryService,
    private categoriaRepository: CategoriaRepositoryService,
    ) { }

  ngOnInit(): void {
    this.categorias = this.categoriaRepository.getAll();
    this.incidencias = this.incidenciaRepository.getAll();
  }

}
