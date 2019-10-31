import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';


const routes: Routes = [{
    path: "",
    component: PagesComponent,
    children: [
        {
            path: "home",
            loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        },
        {
            path: "",
            redirectTo: "home/overview",
            pathMatch: "full",
        }
        /*
        {
            path: '**',
            component: NotFoundComponent,
        },
        */
    ],
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule
{}
