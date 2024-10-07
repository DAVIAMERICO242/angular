import { Routes } from '@angular/router';
import { PageComponent } from './pages/page/page.component';
import { AppComponent } from './app.component';
import { PageOutletComponent } from './pages/page-outlet/page-outlet.component';

export const routes: Routes = [
    {
        path: '',
        component: PageComponent,
        children: [
            {
                path: 'about',
                component: PageOutletComponent
            }
        ]
    }
];