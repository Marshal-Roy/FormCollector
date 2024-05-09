import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { CreateFormComponent } from './components/pages/create-form/create-form.component';
import { UpdateComponent } from './components/pages/update/update.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home/dashboard',component:DashboardComponent},
  {path:'home/dashboard/new',component:CreateFormComponent},
  {path:'update/:id',component:UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
