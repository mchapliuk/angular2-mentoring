import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { UserInfo } from '../core';
import { LoaderBlockService } from '../loader-block/loader-block.service';

@Component({
    selector: 'login-page',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'src/app/login-page/login-page.component.html',
    styleUrls: ['src/app/login-page/login-page.component.css']
})

export class LoginPageComponent implements OnInit, OnDestroy {
    constructor(private authService: AuthService,
                private loaderBlockService: LoaderBlockService,
                private router: Router) {
    }

    public login(username: HTMLInputElement, password: HTMLInputElement): void {
        this.authService.login(username.value, password.value)
            .subscribe(
                (user: any) => {
                    this.router.navigate(['/courses']);
                    this.loaderBlockService.stop()
                },
                () => {
                    console.error('error');
                    this.loaderBlockService.stop()
                },
                () => {
                    console.log('DOne');
                    this.loaderBlockService.stop()
                }
            )
    }

    ngOnInit(): void {
        console.log('LOGIN PAGE: Login Page initialized');
    }

    ngOnDestroy(): void {
        this.loaderBlockService.stop();
        console.log('LOGIN PAGE: Login Page destroyed');
    }
}