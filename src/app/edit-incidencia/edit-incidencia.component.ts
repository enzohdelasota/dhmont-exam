import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('form') form?: ElementRef;
  @ViewChild('focus') focus?: ElementRef;

  categorias?: Categoria[];

  incidencia: Incidencia = {
    id: 0,
    description: '',
    user: '',
    photo_path: '',
    categoriaId: 0,
    state: States.init,
  };

  badinputs = false;

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
    if(this.valideInputs()) {
      this.incidenciaRepository.save(this.incidencia);

      this.incidencia = {
        id: 0,
        description: '',
        user: '',
        photo_path: '',
        categoriaId: 0,
        state: States.init,
      }

      this.form?.nativeElement.reset();
      this.focus?.nativeElement.focus();
    } else {
      this.badinputs = true;
    }
  }

  image(image: any) {
    const file: File = image.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event) => {
      this.incidencia.photo_path = event.target?.result as string;
    });

    reader.readAsDataURL(file);
  }

  valideInputs(): Boolean {
    if (this.incidencia.photo_path === '' ||
    this.incidencia.description === '') {
      return false;
    } else {
      return true;
    }
  }

}
