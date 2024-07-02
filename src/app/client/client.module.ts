import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent,
    AddEditComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
