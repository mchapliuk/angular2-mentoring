import {Component, ChangeDetectionStrategy} from '@angular/core';

import {AuthService} from './auth/auth.service';

@Component({
    selector: 'my-app',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './src/app/app.component.html',
    styleUrls: ['./src/app/app.component.css']
})

/**
 * Root App component
 */
export class AppComponent {
    constructor(private authService: AuthService) {
    }

    public getIsLoggedIn(): boolean {
        return this.authService.getIsLoggedIn();
    }
}
