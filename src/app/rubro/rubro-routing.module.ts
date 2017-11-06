import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RubroListComponent} from './rubro-list/rubro-list.component';
import {RubroCreateComponent} from './rubro-create/rubro-create.component';

const routes: Routes = [
  {path: 'rubros', component: RubroListComponent},
  {path: 'rubro/create', component: RubroCreateComponent},
  {path: 'rubro/edit/:id', component: RubroCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RubroRoutingModule { }
