import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { HttpModule, ConnectionBackend, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';


// Feature modules
import { CoursesModule } from './courses';

// Components
import { AppComponent }  from './app.component';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { LogoComponent } from './logo';
import { UserInfoComponent }  from './user-info';

// Page components
import { LoginPageComponent } from './login-page';
import { CoursesPageComponent } from './courses-page';

// Services
import { AuthService } from './auth/auth.service';
import { LoaderBlockService, LoaderBlockComponent } from './loader-block';

// Routes
import { ROUTES } from './app.routes';
import { AuthorizedHttp } from './core/authorized-http.service';

import { AuthGuard } from "./guards/auth.guard";
import { AuthResolver } from "./guards/auth.resolver";
import AuthHttp from "./core/http-interceptor.service";


@NgModule({
    imports: [
        BrowserModule,
        CoursesModule,
        MaterialModule,
        HttpModule,
        RouterModule.forRoot(ROUTES)
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LogoComponent,
        UserInfoComponent,
        LoginPageComponent,
        CoursesPageComponent,
        LoaderBlockComponent
    ],
    providers: [
        AuthService,
        AuthGuard,
        AuthResolver,
        AuthHttp,
        LoaderBlockService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
