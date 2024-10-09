import { Routes } from '@angular/router';
import { PageComponent } from './pages/page/page.component';
import { AppComponent } from './app.component';
import { PageOutletComponent } from './pages/page-outlet/page-outlet.component';
import { ChildrenComponent } from './pages/page-outlet/components/input-output/children/children.component';
import { ParentComponent } from './pages/page-outlet/components/input-output/parent/parent.component';

export const routes: Routes = [
    {
        path: '',
        component: PageComponent,
        children: [
            {
                path: 'about',
                component: PageOutletComponent
            },
            {
                path: 'inheritance',
                component: ParentComponent
            }
        ]
    },
];