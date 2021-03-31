import { Component, OnInit } from '@angular/core';
import { CategoriaRepositoryService } from '../categoria-repository.service';
import { Incidencia } from '../Incidencia';
import { IncidenciaRepositoryService } from '../incidencia-repository.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  incidencias: Incidencia[] = [];
  data?: any[];

  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Categoría';
  showYAxisLabel = true;
  yAxisLabel = 'Incidencias';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#A10A28']
  };

  constructor(
    private incidenciaRepository: IncidenciaRepositoryService,
    private categoriaRepository: CategoriaRepositoryService,
    ) {}

  axisFormat(val: number) {
    if (val % 1 === 0) {
      return val.toLocaleString();
    }
    return '';
  }

  ngOnInit(): void {

    this.incidencias = this.incidenciaRepository.getAll();
    let categorias = this.categoriaRepository.getAll();
    let count = this.incidencias.reduce<number[]>(
      (prev, curr) => (prev[curr.categoriaId] = ++prev[curr.categoriaId] || 1, prev),{} as number[]);

    let cats = Object.keys(count);

    let data = [];

    for (let i = 0; i < cats.length; i++) {
      data.push({ "name": categorias[+cats[i]].name , "value": count[+cats[i]] });
    }

    Object.assign(this, { data });
  }

}
