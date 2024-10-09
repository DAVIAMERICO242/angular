import { Component } from '@angular/core';
import { AppComponent } from "../../app.component";
import { Route, Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { LoadingButtonComponent } from "../../components/loading-button/loading-button.component";

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [RouterModule, SharedModule, FormsModule, LoadingButtonComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
    date: Date | undefined;

    isBlue: boolean = false;

   constructor(private router:Router){}

   public navigateAbout(){
    this.router.navigate(["/about"])
   }

   public navigateInheritance(){
    this.router.navigate(["/inheritance"])
   }

   public navigatePrimeNG(){
  
    this.router.navigate(["/prime_ng"])
   }

   public navigatePipes(){
    this.router.navigate(["/pipes"])
   }

   public navigateForms(){
    this.router.navigate(["/forms"])
   }
}
