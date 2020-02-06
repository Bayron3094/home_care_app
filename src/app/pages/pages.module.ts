import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages.routing';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class PagesModule { }
