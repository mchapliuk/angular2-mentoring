import {Component, OnInit, OnDestroy, ChangeDetectionStrategy} from '@angular/core';

import {AuthService} from '../auth/auth.service';
import {UserInfo} from '../core';
import {LoaderBlockService} from '../loader-block/loader-block.service';

const USER_INFO_MOCK: UserInfo = {
    username: 'mchapliuk'
};

@Component({
    selector: 'login-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'src/app/login-page/login-page.component.html',
    styleUrls: ['src/app/login-page/login-page.component.css']
})

export class LoginPageComponent implements OnInit, OnDestroy {
    constructor(private authService: AuthService,
                private loaderBlockService: LoaderBlockService) {
    }

    public login(): void {
        this.loaderBlockService.start();
        setTimeout(() => {
            //TODO: pass parameters within appropriate home task
            this.authService.login(USER_INFO_MOCK.username);
        }, 2000)

    }

    ngOnInit(): void {
        console.log('LOGIN PAGE: Login Page initialized');
    }

    ngOnDestroy(): void {
        this.loaderBlockService.stop();
        console.log('LOGIN PAGE: Login Page destroyed');
    }
}