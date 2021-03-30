import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IsAdminGuard } from './is-admin.guard';
import { IsLoginGuard } from './is-login.guard';
import { LoginComponent } from './login/login.component';
import { StaticsComponent } from './statics/statics.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [IsLoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'statics', component: StaticsComponent, canActivate: [IsAdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
