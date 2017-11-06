import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RubroRoutingModule } from './rubro-routing.module';
import { RubroListComponent } from './rubro-list/rubro-list.component';
import { RubroCreateComponent } from './rubro-create/rubro-create.component';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RubroRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RubroListComponent, RubroCreateComponent]
})
export class RubroModule { }
