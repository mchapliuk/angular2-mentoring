import {Component} from '@angular/core';
import {LoaderBlockService} from './loader-block.service';

@Component({
    selector: 'loader-block',
    templateUrl: './src/app/loader-block/loader-block.component.html',
    styleUrls: ['./src/app/loader-block/loader-block.component.css']
})

/**
 * A Component shows a Spinner (Loader) when data is being loaded
 */
export class LoaderBlockComponent {
    public active: boolean;

    constructor(loaderBlockService: LoaderBlockService) {
        loaderBlockService.status.subscribe((status: boolean) => {
            this.active = status;
        })
    }
}
