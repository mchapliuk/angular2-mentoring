import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Feature modules
import {CoursesModule} from './courses';

// Components
import {AppComponent}  from './app.component';
import {HeaderComponent} from './header';
import {FooterComponent} from './footer';
import {LogoComponent} from './logo';
import {UserInfoComponent}  from './user-info';

// Page components
import {LoginPageComponent} from './login-page';
import {CoursesPageComponent} from './courses-page';

// Services
import {AuthService} from './auth/auth.service';

// Routes
import {ROUTES} from './app.routes';

@NgModule({
    imports: [BrowserModule, CoursesModule],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LogoComponent,
        UserInfoComponent,
        LoginPageComponent,
        CoursesPageComponent
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
