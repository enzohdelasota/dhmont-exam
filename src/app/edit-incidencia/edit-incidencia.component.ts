import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Categoria } from '../Categoria';
import { CategoriaRepositoryService } from '../categoria-repository.service';
import { Incidencia } from '../Incidencia';
import { IncidenciaRepositoryService } from '../incidencia-repository.service';
import { States } from '../states.enum';

@Component({
  selector: 'app-edit-incidencia',
  templateUrl: './edit-incidencia.component.html',
  styleUrls: ['./edit-incidencia.component.scss']
})
export class EditIncidenciaComponent implements OnInit {
  categorias?: Categoria[];

  incidencia: Incidencia = {
    id: 0,
    description: '',
    user: '',
    photo_path: '',
    categoriaId: 0,
    state: States.init,
  };

  constructor(
    private incidenciaRepository: IncidenciaRepositoryService,
    private categoriaRepository: CategoriaRepositoryService,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
    this.categorias = this.categoriaRepository.getAll();
    this.incidencia.user = this.authService.userName;
  }

  save() {
    this.incidenciaRepository.save(this.incidencia);
  }

}
