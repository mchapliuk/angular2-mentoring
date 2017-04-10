import { Injectable } from '@angular/core';

import { Course } from './course.interface';
import { COURSES } from '../mock/courses';

import { Subject } from 'rxjs/Subject';

import { LoaderBlockService } from '../loader-block';

import { FindCoursePipe } from '../core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

/**
 * A Service manages Courses
 */
@Injectable()
export class CoursesService {
    public courses: Observable<Course> = Observable.of(...COURSES);
    public isEditingMode: boolean = false;

    constructor(private loaderBlockService: LoaderBlockService,
                private findCourse: FindCoursePipe) {
        console.log('Courses Service initialized and Courses are loaded');
    }

    /**
     * Publish Courses
     */
    public getCourses(): Observable<Course> {
        return this.getCoursesObservable();
    }

    /**
     * Finds courses that matches given search query
     * @param {string} searchText
     */
    public findCourses(searchText: string): Observable<Course> {
        return this.courses
            .filter((course: Course) => course.title.indexOf(searchText) >= 0);
    }

    /**
     * Removes Course by given ID from collection
     * @param {Number} id - Identifier of the Course
     */
    public removeCourse(id: number): Observable<Course> {
        let indexOfCourse: number;
        // TODO: Do better!
        COURSES.forEach((course: Course, index: number) => {
            if (course.id === id) {
                indexOfCourse = index;
                return;
            }
        });

        COURSES.splice(indexOfCourse, 1);

        return this.getCoursesObservable();
        //this.loaderBlockService.start();
    }

    public goToAddCourse(): void {
        this.isEditingMode = true;
    }

    public cancelEditing(): void {
        this.isEditingMode = false;
    }

    public getIsEditingMode(): boolean {
        return this.isEditingMode;
    }

    /** Privates */
    private getCoursesObservable(): Observable<Course> {
        return Observable.of(...COURSES);
    }
}
