import {Component, OnInit, OnDestroy} from '@angular/core';

import {AuthService} from '../auth/auth.service';

@Component({
    selector: 'login-page',
    templateUrl: 'src/app/login-page/login-page.component.html',
    styleUrls: ['src/app/login-page/login-page.component.css']
})

export class LoginPageComponent implements OnInit, OnDestroy {
    constructor(private authService: AuthService) {
    }

    public login(): void {
        this.authService.login()
            .then(loginInfo => console.log(`User logged in as ${loginInfo.username}`));
    }

    ngOnInit(): void {
        console.log('Login Page initialized');
    }

    ngOnDestroy(): void {
        console.log('Login Page destroyed');
    }
}