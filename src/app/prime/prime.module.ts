import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



@NgModule({
  declarations: [],
  imports: [
  ],
  exports:[
    InputTextModule,
    MultiSelectModule,
    TableModule, 
    DialogModule, 
    ButtonModule, 
    ConfirmDialogModule
  ]
})
export class PrimeModule { }
