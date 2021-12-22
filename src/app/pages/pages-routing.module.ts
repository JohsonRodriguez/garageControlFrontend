import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PersonsComponent } from './persons/persons.component';
import { RegisterComponent } from './register/register.component';
import { NewpersonComponent } from './persons/newperson/newperson.component';
import { EditpersonComponent } from './persons/editperson/editperson.component';
import { DetailpersonComponent } from './persons/detailperson/detailperson.component';
import { NewregisterComponent } from './register/newregister/newregister.component';
import { CarComponent } from './car/car.component';
import { NewcarComponent } from './car/newcar/newcar.component';
import { DetailcarComponent } from './car/detailcar/detailcar.component';
import { EditcarComponent } from './car/editcar/editcar.component';
import { DetailregisterComponent } from './register/detailregister/detailregister.component';


const routes: Routes = [
  {
  path: 'dashboard', component: PagesComponent,
  children: [
   {path: 'dashboard',component:DashboardComponent},
   {path: 'persons',component:PersonsComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'newregister',component:NewregisterComponent},
  {path: 'edit/:id',component:EditpersonComponent},
  {path: 'ver/:id',component:DetailpersonComponent},
  {path: 'cars',component:CarComponent},
  {path:'newperson',component:NewpersonComponent},
  {path:'newcar',component:NewcarComponent},
  {path: 'vercar/:id',component:DetailcarComponent},
  {path: 'editcar/:id',component:EditcarComponent},
  {path: 'verregister/:id',component:DetailregisterComponent},
  
  
  ]}
  
];


@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
