import {Component, OnInit, OnDestroy, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'courses-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'src/app/courses-page/courses-page.component.html',
    styleUrls: ['src/app/courses-page/courses-page.component.css']
})

/**
 * Home Page of the App. The Courses Page
 */
export class CoursesPageComponent implements OnInit, OnDestroy {
    ngOnInit():void {
        console.log('Courses Page initialized');
    }

    ngOnDestroy():void {
        console.log('Courses Page destroyed');
    }
}