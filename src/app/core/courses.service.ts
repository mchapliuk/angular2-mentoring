import {Injectable} from '@angular/core';

import {Course} from './course.interface';
import {COURSES} from '../mock/courses';

@Injectable()
export class CoursesService {
    private courses: Course[];

    constructor() {
        console.log('Courses Service initialized and Courses are loaded')
        this.courses = COURSES;
    }

    public getCourses(): Course[] {
        return this.courses;
    }

    public createCourse(): void {

    }

    public getCourse(id: number): Course {
        return this.courses.find((course: Course) => course.id === id);
    }

    public findCourses(searchText: string): Course[] {
        return this.courses.filter((course: Course) => course.title.indexOf(searchText) >= 0)
    }

    public updateCourse(id: number): void {

    }

    public removeCourse(id: number): Promise<any> {
        let indexOfCourse: number;
        this.courses.forEach((course: Course, index: number) => {
            if (course.id === id) {
                indexOfCourse = index;
                return;
            }
        });

        this.courses.splice(indexOfCourse, 1);
        return Promise.resolve();
    }
}

