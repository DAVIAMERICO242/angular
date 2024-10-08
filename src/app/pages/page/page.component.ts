import { Component } from '@angular/core';
import { AppComponent } from "../../app.component";
import { Route, Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [RouterModule, SharedModule, FormsModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
    date: Date | undefined;

    isBlue: boolean = false;

   constructor(private router:Router){}

   public navigate(){
    this.router.navigate(["/about"])
   }
}
