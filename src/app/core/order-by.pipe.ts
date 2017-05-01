/**
 * Bad practice, but for learning purposes
 */

import { Pipe } from '@angular/core';

import { Course } from '../courses/course.interface';

@Pipe({
    name: 'orderBy'
})

export class OrderByPipe {
    transform(courses: Course[]): Course[] {
        return courses.sort((a: Course, b: Course) => {
            return +(new Date(a.date)) - +(new Date(b.date));
        });
    }
}
