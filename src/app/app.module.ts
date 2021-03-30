import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditIncidenciaComponent } from './edit-incidencia/edit-incidencia.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMatModule } from './mat.module';
import { IncidenciasListComponent } from './incidencias-list/incidencias-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EditIncidenciaComponent,
    IncidenciasListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MyMatModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
