import {Injectable} from '@angular/core';

import {UserInfo} from '../core';

const LOGIN_LS_KEY = 'mch_login';

@Injectable()
export class AuthService {
    private isLoggedIn: boolean;
    private userInfo: UserInfo;

    public login(): Promise<UserInfo> {
        this.isLoggedIn = true;

        this.userInfo = {
            username: 'Maksym Chapliuk'
        };

        localStorage.setItem(LOGIN_LS_KEY, JSON.stringify(this.userInfo));

        console.log('User logged in');

        return Promise.resolve(this.userInfo);
    }

    public logoff(): void {
        this.isLoggedIn = false;
        localStorage.removeItem(LOGIN_LS_KEY);
        console.log('User is logged off')
    }

    public getIsLoggedIn(): boolean {
        return !!localStorage[LOGIN_LS_KEY];
    }

    public getUserInfo(): UserInfo {
        return localStorage[LOGIN_LS_KEY] && JSON.parse(localStorage[LOGIN_LS_KEY]);
    }
}
