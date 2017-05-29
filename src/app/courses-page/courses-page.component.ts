import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CoursesService } from '../courses/courses.service';

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
    constructor(private coursesService: CoursesService,
                private changeDetector: ChangeDetectorRef) {
        this.changeDetector.markForCheck();
    }

    ngOnInit(): void {
        console.log('Courses Page initialized');
    }

    ngOnDestroy(): void {
        console.log('Courses Page destroyed');
    }
}