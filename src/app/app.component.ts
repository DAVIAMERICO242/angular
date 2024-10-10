import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterModule, RouterOutlet } from '@angular/router';
import { PageComponent } from "./pages/page/page.component";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    PageComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-davi';

  loadingLazyComponent!: boolean;

  constructor (private router: Router) {
    
  }

  ngOnInit () {
      this.router.events.subscribe(event => {
          if (event instanceof RouteConfigLoadStart) {
              this.loadingLazyComponent = true;
          } else if (event instanceof RouteConfigLoadEnd) {
              this.loadingLazyComponent = false;
          }
      });
  }
}
