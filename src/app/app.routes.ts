import { Routes } from '@angular/router';

// Route components
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthResolver } from './guards/auth.resolver';
import NotFoundComponent from './not-found.component';

export const ROUTES: Routes = [{
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
}, {
    path: 'courses',
    component: CoursesPageComponent,
    canActivate: [AuthGuard]
}, {
    path: 'login',
    component: LoginPageComponent,
    resolve: [AuthResolver]
}, {
    path: '**',
    component: NotFoundComponent
}];
