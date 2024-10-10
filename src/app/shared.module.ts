import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,CalendarModule,FormsModule,ReactiveFormsModule],
  exports: [CommonModule,CalendarModule,FormsModule,ReactiveFormsModule]  // Export CommonModule to be used in other modules/components
})
export class SharedModule {}