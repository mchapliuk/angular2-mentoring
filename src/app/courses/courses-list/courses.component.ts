/**
 * Main courses panel, includes search, add course, list of courses
 */
import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';

import {Course} from '../course.interface';
import {CoursesService} from '../courses.service';
import {LoaderBlockService} from '../../loader-block/loader-block.service';

// TODO: use relative paths
@Component({
    selector: 'my-courses',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'src/app/courses/courses-list/courses.component.html',
    styleUrls: ['src/app/courses/courses-list/courses.component.css']
})

export class CoursesComponent implements OnInit {
    public courses: Course[] = [];

    constructor(private coursesService: CoursesService,
                private loaderBlockService: LoaderBlockService,
                private changeDetector: ChangeDetectorRef) {
        this.coursesService.courses.subscribe((courses: Course[]) => {
            this.courses = courses;
            this.changeDetector.markForCheck();
        });
    }

    ngOnInit(): void {
        console.log('Courses Component is initialized');
        this.getCourses();
    }

    public deleteCourse(id: number): void {
        if (confirm('Are you sure you want to remove the course?')) {
            this.coursesService.removeCourse(id);
        } else {
            console.log('Removing was canceled');
        }
    }

    private getCourses(): void {
        this.coursesService.getCourses();
    }
}
