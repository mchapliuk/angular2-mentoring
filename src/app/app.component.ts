import { Component } from '@angular/core';

import {AuthService} from './auth/auth.service';

@Component({
    selector: 'my-app',
    templateUrl:  './src/app/app.component.html',
    styleUrls: ['./src/app/app.component.css']
})

export class AppComponent {
    constructor(private authService: AuthService){}

    getIsLoggedIn():boolean {
        return this.authService.getIsLoggedIn();
    }

}
