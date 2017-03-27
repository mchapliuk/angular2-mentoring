import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'my-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'src/app/header/header.component.html',
    styleUrls: ['src/app/header/header.component.css']
})

export class HeaderComponent {

}
