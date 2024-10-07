import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { Calendar, CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [CalendarModule,CommonModule,FormsModule],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent {
  date!:Date
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(`data inicial ${this.date}`)
  }
}
