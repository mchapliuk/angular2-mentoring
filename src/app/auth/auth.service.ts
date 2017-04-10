import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { UserInfo } from '../core';

const LOGIN_LS_KEY = 'mch_login';

/**
 * AuthService managed authentication
 */
@Injectable()
export class AuthService {
    private isLoggedIn: boolean;
    public userInfo: ReplaySubject<UserInfo> = new ReplaySubject<UserInfo>(null);

    constructor() {
        this.isLoggedIn = !!localStorage[LOGIN_LS_KEY];
        if (this.isLoggedIn) {
            this.userInfo.next(this.readUserInfo());
        }
    }

    /**
     * Logs a User in and publish an Event with User's data for subscribers
     * @param {string} userName - User's Name
     * @param {string} password - User's Password
     */
    public login(userName?: string, password?: string): void {
        this.isLoggedIn = true;
        this.storeUserInfo({
            username: userName,
            password
        });

        // Send UserInfo message
        this.userInfo.next(this.readUserInfo());
    }

    /**
     * Remove the User's record and publish an Event for subscribers
     */
    public logoff(): void {
        this.isLoggedIn = false;
        localStorage.removeItem(LOGIN_LS_KEY);
        this.userInfo.next(null);
        console.log('AUTH SERVICE: User is logged off');
    }

    /**
     * Returns true if any User is logged in, or nobody logged in
     * @returns {boolean}
     */
    public getIsLoggedIn(): boolean {
        return this.isLoggedIn;
    }

    /**
     * Returns logged in User's information
     * @returns {Observable<UserInfo>}
     */
    public getUserInfo(): Observable<UserInfo> {
        return this.userInfo.asObservable();
    }

    /**
     * Privates
     */
    private storeUserInfo(userInfo: UserInfo): void {
        localStorage.setItem(LOGIN_LS_KEY, JSON.stringify(userInfo));
    }

    /**
     * Reads UserInfo from localStorage
     * @private
     */
    private readUserInfo(): UserInfo|undefined {
        return localStorage[LOGIN_LS_KEY] && JSON.parse(localStorage[LOGIN_LS_KEY]);
    }
}
