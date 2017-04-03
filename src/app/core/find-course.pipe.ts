import { Pipe, PipeTransform } from '@angular/core';

import { Course } from '../courses/course.interface';

/**
 * Filters an array of courses by search name value
 */
@Pipe({
    name: 'findCourse'
})

export class FindCoursePipe implements PipeTransform {
    transform(courses: Course[], query: string): Course[] {
        debugger;
        return courses.filter((course: Course) => course.title.indexOf(query) >= 0);
    }
}
