import { Routes } from '@angular/router';
import { PageComponent } from './pages/page/page.component';
import { AppComponent } from './app.component';
import { PageOutletComponent } from './pages/page-outlet/page-outlet.component';
import { ChildrenComponent } from './pages/page-outlet/components/input-output/children/children.component';
import { ParentComponent } from './pages/page-outlet/components/input-output/parent/parent.component';
import { PrimeNgComponent } from './pages/page-outlet/components/prime-ng/prime-ng/prime-ng.component';
import { ExampleComponentComponent } from './pages/page-outlet/components/pipes/example-component/example-component.component';
import { GenericFormComponent } from './pages/page-outlet/components/forms/generic-form/generic-form.component';
import { DiretivasEstruturaisComponent } from './pages/page-outlet/components/diretivas-estruturais/diretivas-estruturais.component';

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
            },
            {
                path:'prime_ng',
                component:PrimeNgComponent
            },
            {
                path:'pipes',
                component:ExampleComponentComponent
            }
            ,
            {
                path:'forms',
                component:GenericFormComponent
            },
            {
                path:'diretivas_estruturais',
                component:DiretivasEstruturaisComponent
            }
        ]
    },
];