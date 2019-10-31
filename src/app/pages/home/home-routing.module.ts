import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { OverviewComponent } from './overview/overview.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [{
    path: "",
    component: HomeComponent,
    children: [
        {
            path: "overview",
            component: OverviewComponent,
        },
        {
            path: "account",
            component: AccountComponent,
        },
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
