import {Injectable} from '@angular/core';

import {Course} from './course.interface';
import {COURSES} from '../mock/courses';

import {Subject} from 'rxjs/Subject';

import {LoaderBlockService} from '../loader-block';

/**
 * A Service manages Courses
 */
@Injectable()
export class CoursesService {
    public courses: Subject<Course[]> = new Subject<Course[]>();

    constructor(private loaderBlockService: LoaderBlockService) {
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

    public createCourse(): void {
        // to be done within the appropriate home task
    }

    public getCourse(id: number): void {
        this.courses.next([COURSES.find((course: Course) => course.id === id)]);
    }

    public findCourses(searchText: string): void {
        this.courses.next([...COURSES.filter((course: Course) => course.title.indexOf(searchText) >= 0)]);
    }

    public updateCourse(id: number): void {
        // to be done within the appropriate home task
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
