import { Component, ChangeDetectionStrategy } from '@angular/core';

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

}
