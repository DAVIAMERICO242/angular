import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,CalendarModule,FormsModule],
  exports: [CommonModule,CalendarModule,FormsModule]  // Export CommonModule to be used in other modules/components
})
export class SharedModule {}