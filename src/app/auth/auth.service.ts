import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { UserInfo } from '../core';

import { BASE_API_URL } from '../config/config';
// import { AuthorizedHttp } from "../core/authorized-http.service";
import { Subscription, BehaviorSubject } from "rxjs";

const LOGIN_LS_KEY = 'mch_login';
const LOGIN_URL = `${BASE_API_URL}/auth/login`;
const USER_URL = `${BASE_API_URL}/auth/userinfo`;

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/**
 * AuthService managed authentication
 */
@Injectable()
export class AuthService {
    public isLoggedIn: boolean;

    constructor(private http: Http/*, private authHttp: AuthorizedHttp*/) {
        this.isLoggedIn = !!localStorage[LOGIN_LS_KEY];
    }

    public login(login: string, password: string): Observable<Subscription> {
        return this.http.post(LOGIN_URL, {
            login,
            password
        }).map((res: Response) => {
            let user = res.json();
            localStorage.setItem(LOGIN_LS_KEY, user.token);
            this.setIsLoggedIn(true);
            return user.token
        }).catch((error: Response) => Observable.throw(error.json()));
    }

    public logoff(): void {
        localStorage.removeItem(LOGIN_LS_KEY);
    }


    private setIsLoggedIn(value: boolean): void {
        this.isLoggedIn = value;
    }
}
