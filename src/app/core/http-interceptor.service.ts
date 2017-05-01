import { Injectable } from '@angular/core';
import {Http, Headers, Request} from '@angular/http';

@Injectable()
export default class AuthHttp {
    constructor(private http: Http) {}

    request(options: Request) {
        this.addAuthHeader(options.headers);
        return this.http.request(options);
    }

    private addAuthHeader(headers: Headers) {
        headers.append('Authorization', localStorage.getItem('mch_login'));
    }
}
