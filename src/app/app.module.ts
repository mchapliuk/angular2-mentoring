import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

// Components
import {AppComponent}  from './app.component';
import {HeaderComponent} from './header';
import {CoursesComponent, CourseDetailComponent}  from './courses';
import {FooterComponent} from './footer';
import {LogoComponent} from './logo';
import {UserInfoComponent}  from './user-info';
import {ToolboxComponent} from './toolbox';

// Page components
import {LoginPageComponent} from './login-page';
import {CoursesPageComponent} from './courses-page';

// Services
import {CoursesService} from './core/courses.service';
import {AuthService} from './auth/auth.service';

// Routes
import {ROUTES} from './app.routes';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        CoursesComponent,
        CourseDetailComponent,
        LogoComponent,
        UserInfoComponent,
        ToolboxComponent,
        LoginPageComponent,
        CoursesPageComponent
    ],
    providers: [CoursesService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
