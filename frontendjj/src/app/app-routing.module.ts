import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartamentoComponent } from './departamento/departamento.component'
import { MunicipioComponent } from './municipio/municipio.component'

const routes: Routes = [
  { path: '', component: DepartamentoComponent },
  { path: 'departamento/:id', component: MunicipioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
