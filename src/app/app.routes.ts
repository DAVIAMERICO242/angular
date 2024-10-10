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
import { AsyncPipeComponent } from './pages/page-outlet/components/async-pipe/async-pipe.component';

export const routes: Routes = [
    {
        path: '',
        component: PageComponent,
        children: [
            {
                path: 'about',
                loadComponent:()=>import('./pages/page-outlet/page-outlet.component').then(m=>m.PageOutletComponent)
            },
            {
                path: 'inheritance',
                loadComponent:()=>import('./pages/page-outlet/components/input-output/parent/parent.component').then(m=>m.ParentComponent)
            },
            {
                path:'prime_ng',
                loadComponent:()=>import('./pages/page-outlet/components/prime-ng/prime-ng/prime-ng.component').then(m=>m.PrimeNgComponent)
            },
            {
                path:'pipes',
                loadComponent:()=>import('./pages/page-outlet/components/pipes/example-component/example-component.component').then(m=>m.ExampleComponentComponent)
            }
            ,
            {
                path:'forms',
                loadComponent:()=>import('./pages/page-outlet/components/forms/generic-form/generic-form.component').then(m=>m.GenericFormComponent)
            },
            {
                path:'diretivas_estruturais',
                loadComponent:()=>import('./pages/page-outlet/components/diretivas-estruturais/diretivas-estruturais.component').then(m=>m.DiretivasEstruturaisComponent)
            },
            {
                path:'async_pipe',
                loadComponent:()=>import('./pages/page-outlet/components/async-pipe/async-pipe.component').then(m=>m.AsyncPipeComponent)
            }
        ]
    },
];