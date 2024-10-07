import { Component } from '@angular/core';
import { DadComponent } from "./components/dad/dad.component";

@Component({
  selector: 'app-page-outlet',
  standalone: true,
  imports: [DadComponent],
  templateUrl: './page-outlet.component.html',
  styleUrl: './page-outlet.component.css'
})
export class PageOutletComponent {

}
