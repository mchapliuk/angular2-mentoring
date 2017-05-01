import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers, Response, ConnectionBackend, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";

@Injectable()
export class AuthorizedHttp extends Http {
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(url, this.extendOptions(this.setAuthHeader(), options));
    }

    private setAuthHeader(): Headers {
        let token = localStorage.getItem('mch_login');
        return new Headers({'Authorization': token});
    }

    private extendOptions(headers: Headers, options?: RequestOptionsArgs): RequestOptionsArgs {
        return Object.assign(options, Headers);
    }
}
