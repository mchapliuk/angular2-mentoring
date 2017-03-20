import {Component, OnInit} from '@angular/core';

import {UserInfo} from '../core';
import {AuthService} from '../auth/auth.service';

@Component({
    selector: 'my-login',
    templateUrl: 'src/app/user-info/user-info.component.html',
    styleUrls: ['src/app/user-info/user-info.component.html']
})

export class UserInfoComponent implements OnInit {
    public userInfo: UserInfo;

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
        this.userInfo = this.authService.getUserInfo();
    }

    public getIsLoggedIn(): boolean {
        return this.authService.getIsLoggedIn();
    }

    public logoff(): void {
        this.authService.logoff();
    }
}
