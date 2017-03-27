import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'my-logo',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'src/app/logo/logo.component.html',
    styleUrls: ['src/app/logo/logo.component.css']
})

export class LogoComponent {}
