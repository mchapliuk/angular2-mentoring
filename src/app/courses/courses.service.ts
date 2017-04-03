import { Injectable } from '@angular/core';

import { Course } from './course.interface';
import { COURSES } from '../mock/courses';

import { Subject } from 'rxjs/Subject';

import { LoaderBlockService } from '../loader-block';

import { FindCoursePipe } from '../core';

/**
 * A Service manages Courses
 */
@Injectable()
export class CoursesService {
    public courses: Subject<Course[]> = new Subject<Course[]>();

    constructor(private loaderBlockService: LoaderBlockService,
                private findCourse: FindCoursePipe) {
        console.log('Courses Service initialized and Courses are loaded');
        this.courses.next([...COURSES]);
    }

    /**
     * Publish Courses
     */
    public getCourses(): void {
        this.loaderBlockService.start();
        setTimeout(() => {
            this.loaderBlockService.stop();
            this.courses.next([...COURSES]);
        }, 1000);
    }

    /**
     * Finds courses that matches given search query
     * @param {string} searchText
     */
    public findCourses(searchText: string): void {
        let filteredCourses: Course[] = this.findCourse.transform([...COURSES], searchText);
        this.courses.next(filteredCourses);
    }

    /**
     * Removes Course by given ID from collection
     * @param {Number} id - Identifier of the Course
     */
    public removeCourse(id: number): void {
        let indexOfCourse: number;
        // TODO: Do better!
        COURSES.forEach((course: Course, index: number) => {
            if (course.id === id) {
                indexOfCourse = index;
                return;
            }
        });

        COURSES.splice(indexOfCourse, 1);

        this.loaderBlockService.start();
        setTimeout(() => {
            this.loaderBlockService.stop();
            this.courses.next([...COURSES]);
        }, 400);
    }
}
