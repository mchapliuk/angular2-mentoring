import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {HeaderComponent, FooterComponent}  from './core';
import {CourseComponent, CoursesComponent}  from './layout/courses';
import {LoginComponent}  from './layout/login';

// Routes
import {ROUTES} from './app.routes';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        CourseComponent,
        CoursesComponent,
        LoginComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
