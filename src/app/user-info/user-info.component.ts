import {
    Component,
    OnInit,
    OnDestroy,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Input
} from '@angular/core';

import {UserInfo} from '../core';
import {AuthService} from '../auth/auth.service';

@Component({
    selector: 'my-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'src/app/user-info/user-info.component.html',
    styleUrls: ['src/app/user-info/user-info.component.html']
})

export class UserInfoComponent implements OnInit, OnDestroy {
    @Input() public userInfo: UserInfo;

    constructor(private authService: AuthService,
                private changeDetector: ChangeDetectorRef) {
        // this.authService
        //     .userInfo
        //     .subscribe((userInfo: UserInfo) => {
        //         this.userInfo = userInfo;
        //         this.changeDetector.markForCheck();
        //         console.info('USER INFO CMP: User Info received: %s', JSON.stringify(userInfo));
        //     });
    }

    ngOnInit(): void {
        console.info('USER INFO CMP: Component Initialized');
    }

    ngOnDestroy() {
        console.info('USER INFO CMP destroyed');
    }

    public getIsLoggedIn(): boolean {
        return false
        // return this.authService.getIsLoggedIn();
    }

    public logoff(): void {
       // this.authService.logoff();
    }
}
