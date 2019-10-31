import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { OverviewComponent } from './overview/overview.component';


const routes: Routes = [{
    path: "",
    component: HomeComponent,
    children: [
        {
            path: "overview",
            component: OverviewComponent,
        },
        /*{
          path: 'layouts',
          component: FormLayoutsComponent,
        },
        {
          path: 'layouts',
          component: FormLayoutsComponent,
        },
        {
          path: 'buttons',
          component: ButtonsComponent,
        },
        {
          path: 'datepicker',
          component: DatepickerComponent,
        },*/
    ]
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class HomeRoutingModule
{}
