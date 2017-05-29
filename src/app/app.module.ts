import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    MdButtonModule,
    MdInputModule} from '@angular/material';
import { HttpModule, ConnectionBackend, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';


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

import { AuthGuard } from './guards/auth.guard';
import { AuthResolver } from './guards/auth.resolver';
import { CourseDetailsResolveService } from './courses/course.resolver';
import AuthHttp from './core/http-interceptor.service';
import NotFoundComponent from './not-found.component';

@NgModule({
    imports: [
        BrowserModule,
        CoursesModule,
        MdButtonModule,
        MdInputModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
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
        LoaderBlockComponent,
        NotFoundComponent
    ],
    providers: [
        AuthService,
        AuthGuard,
        AuthResolver,
        AuthHttp,
        LoaderBlockService,
        CourseDetailsResolveService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
