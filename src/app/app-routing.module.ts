import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { IsAdminGuard } from './is-admin.guard';
import { IsLoginGuard } from './is-login.guard';
import { LoginComponent } from './login/login.component';
import { StaticsComponent } from './statics/statics.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [IsLoginGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'statics', component: StaticsComponent, canActivate: [IsAdminGuard] },
    ]
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
