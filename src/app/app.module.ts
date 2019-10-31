import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';

import {
    NbDatepickerModule,
    NbDialogModule,
    NbMenuModule,
    NbSidebarModule,
    NbToastrModule,
    NbWindowModule,
} from '@nebular/theme';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ThemeModule.forRoot(),
        NbEvaIconsModule,
        NbAuthModule.forRoot({
            strategies: [
                NbPasswordAuthStrategy.setup({
                    name: "usernamepass",
                    baseEndpoint: "/wowdash-api",
                    login: {
                        endpoint: "/auth/sign-in",
                        redirect: {
                            success: "/dashboard/",
                            failure: null
                        },
                        defaultErrors: ["Username/password combination is not correct, please try again."]
                    },
                    register: {
                        endpoint: "/auth/sign-up",
                        redirect: {
                            success: "/auth/login",
                            failure: null
                        }
                    },
                    logout: {
                        endpoint: "/auth/sign-out",
                        redirect: {
                            success: "/auth/login",
                            failure: null
                        }
                    },
                    requestPass: {
                        endpoint: "/auth/request-pass",
                        redirect: {
                            success: "/auth/login",
                            failure: null
                        }
                    },
                    resetPass: {
                        endpoint: "/auth/reset-pass",
                        redirect: {
                            success: "/auth/login",
                            failure: null
                        }
                    }
                })
            ],
            forms: {
                login: {
                    strategy: "usernamepass"
                },
                register: {
                    strategy: "usernamepass"
                },
                logout: {
                    strategy: "usernamepass"
                },
                requestPassword: {
                    strategy: "usernamepass"
                },
                resetPassword: {
                    strategy: "usernamepass"
                }
            }
        }),
        NbSidebarModule.forRoot(),
        NbMenuModule.forRoot(),
        NbDatepickerModule.forRoot(),
        NbDialogModule.forRoot(),
        NbWindowModule.forRoot(),
        NbToastrModule.forRoot(),
        CoreModule.forRoot(),
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule
{}
