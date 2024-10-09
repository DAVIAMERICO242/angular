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

   public navigateAbout($event:MouseEvent){
    $event.stopPropagation();
    this.router.navigate(["/about"])
   }

   public navigateInheritance($event:MouseEvent){
    $event.stopPropagation();
    this.router.navigate(["/inheritance"])
   }

   public navigatePrimeNG($event:MouseEvent){
    $event.stopPropagation();
    this.router.navigate(["/prime_ng"])
   }

   public navigatePipes($event:MouseEvent){
    $event.stopPropagation();
    this.router.navigate(["/pipes"])
   }

   public navigateForms($event:MouseEvent){
    $event.stopPropagation();
    this.router.navigate(["/forms"])
   }
}
