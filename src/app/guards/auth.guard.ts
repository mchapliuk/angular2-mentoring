import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService,
                private router: Router) {
    }

    canActivate(): boolean {
        if (!this.authService.isLoggedIn) {
            this.router.navigate(['/login']);
        }
        return this.authService.isLoggedIn;
    }
}
