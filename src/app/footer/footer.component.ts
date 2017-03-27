import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'my-footer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'src/app/footer/footer.component.html',
    styleUrls: ['src/app/footer/footer.component.css']
})

/**
 * A Static Footer without behaviour
 */
export class FooterComponent {

}
