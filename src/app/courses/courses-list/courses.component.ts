/**
 * Main courses panel, includes search, add course, list of courses
 */
import {
    Component,
    OnInit,
    ChangeDetectorRef
} from '@angular/core';

import { Course } from '../course.interface';
import { CoursesService } from '../courses.service';
import { LoaderBlockService } from '../../loader-block/loader-block.service';

@Component({
    selector: 'my-courses',
    templateUrl: 'src/app/courses/courses-list/courses.component.html',
    styleUrls: [
        'src/app/courses/courses-list/courses.component.css',
        'src/app/courses/courses-list/toolbox.component.css'
    ]
})

export class CoursesComponent implements OnInit {
    public courses: Course[] = [];
    public searchName: string = '';

    constructor(private coursesService: CoursesService,
                private loaderBlockService: LoaderBlockService,
                private changeDetector: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.coursesService
            .getCourses()
            .subscribe((courses: Course[])=> {
                this.courses = courses;
                this.changeDetector.detectChanges();
            });
    }

    public loadMoreCourses(): void {
        this.coursesService
            .getNextCourses()
            .subscribe((courses: Course[])=> {
                this.courses = this.courses.concat(courses);
                this.changeDetector.detectChanges();
            })
    }

    public deleteCourse(id: number): void {
        if (confirm('Are you sure you want to remove the course?')) {
            this.coursesService.deleteCourse(id)
                .subscribe(() => {
                    this.coursesService
                        .getCourses()
                        .subscribe((courses: Course[])=> {
                            this.courses = courses;
                            this.changeDetector.detectChanges();
                        });
                })
        } else {
            console.log('Removing was canceled');
        }
    }

    public searchCourse(): void {
        this.coursesService
            .findCourses(this.searchName)
            .subscribe((courses: Course[])=> {
                this.courses = courses;
                this.changeDetector.detectChanges();
            });

        this.searchName = '';
    }
}
