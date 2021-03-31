import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditIncidenciaComponent } from './edit-incidencia/edit-incidencia.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMatModule } from './mat.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { IncidenciasListComponent } from './incidencias-list/incidencias-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { StaticsComponent } from './statics/statics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import * as fromHome from './reducers/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './effects/home.effects';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    StaticsComponent,
    EditIncidenciaComponent,
    IncidenciasListComponent,
    ToolbarComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MyMatModule,
    NgxChartsModule,
    StoreModule.forRoot(reducers),
    StoreModule.forFeature(fromHome.homeFeatureKey, fromHome.reducer),
    //EffectsModule.forFeature([HomeEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
