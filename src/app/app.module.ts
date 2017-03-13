import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
// import {HeaderComponent, FooterComponent}  from './core';
import {CoursesComponent}  from './layout/courses';
import {FooterComponent} from './layout/footer';
// import {LoginComponent}  from './layout/login';

// Routes
import {ROUTES} from './app.routes';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        // HeaderComponent,
        FooterComponent,
        CoursesComponent,
        // LoginComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
