import { NgModule } from '@angular/core';
import { FormsModule as ngFormsModule } from '@angular/forms';

import {
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { OverviewComponent } from './overview/overview.component';
import { AccountComponent } from './account/account.component';

@NgModule({
    imports: [
        ThemeModule,
        NbInputModule,
        NbCardModule,
        NbButtonModule,
        NbActionsModule,
        NbUserModule,
        NbCheckboxModule,
        NbRadioModule,
        NbDatepickerModule,
        NbSelectModule,
        NbIconModule,
        ngFormsModule,
        HomeRoutingModule,
    ],
    declarations: [
        HomeComponent,
        OverviewComponent,
        AccountComponent
    ],
})
export class HomeModule
{}
