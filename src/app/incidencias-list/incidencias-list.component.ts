import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../Categoria';
import { CategoriaRepositoryService } from '../categoria-repository.service';
import { Incidencia } from '../Incidencia';
import { IncidenciaRepositoryService } from '../incidencia-repository.service';
import { States } from '../states.enum';
import { Store, select } from '@ngrx/store';
import * as fromHome from '../reducers/home.reducer';
import { selectHomeState, selectIncidencias } from '../selectors/home.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-incidencias-list',
  templateUrl: './incidencias-list.component.html',
  styleUrls: ['./incidencias-list.component.scss']
})
export class IncidenciasListComponent implements OnInit {
  @Input() columns?: string[];
  states = Object.values(States);

  incidencias: Incidencia[] = [];
  categorias: Categoria[] = [];

  incidencias$: Observable<Incidencia[]>;

  constructor(
    private incidenciaRepository: IncidenciaRepositoryService,
    private categoriaRepository: CategoriaRepositoryService,
    private store: Store,
    ) {
      this.incidencias$ = this.store.pipe(select(selectIncidencias));
    }

  ngOnInit(): void {
    this.categorias = this.categoriaRepository.getAll();
    //this.incidencias = this.incidenciaRepository.getAll();
    this.incidencias$.subscribe(it => {
      this.incidencias = it;
    });
  }

  save(incidencia: Incidencia) {
    this.incidenciaRepository.changeState(incidencia);
  }

}
