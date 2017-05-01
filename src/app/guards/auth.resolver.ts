import { Injectable } from '@angular/core';
import { Router, Resolve } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthResolver implements Resolve<Boolean> {
    constructor(private authService: AuthService,
                private router: Router) {
    }

    resolve(): Boolean {
        if (this.authService.isLoggedIn) {
            this.router.navigate(['/courses']);
            return false;
        } else {
            return true;
        }
    }
}
