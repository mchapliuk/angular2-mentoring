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
import {LoaderBlockService, LoaderBlockComponent} from './loader-block';

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
        CoursesPageComponent,
        LoaderBlockComponent
    ],
    providers: [AuthService, LoaderBlockService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
