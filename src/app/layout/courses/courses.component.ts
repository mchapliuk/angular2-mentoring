/**
 * Main courses panel, includes search, add course, list of courses
 */
import { Component } from '@angular/core';
import Course from './course.intrerface';

const COURSES: Course[] = [
    {
        id: 1,
        title: 'Course 1',
        creationDate: new Date(1, 1, 2016),
        duration: 120,
        description: 'Lorem ipsum dolor sit amet'
    }, {
        id: 2,
        title: 'Course 2',
        creationDate: new Date(15, 4, 2016),
        duration: 60
    }, {
        id: 3,
        title: 'Course 3',
        creationDate: new Date(13, 3, 2017),
        duration: 120,
        description: 'Lorem ipsum dolor sit amet'
    }
];

@Component({
    selector: 'my-courses',
    templateUrl: 'src/app/layout/courses/courses.component.html',
    styleUrls: ['src/app/layout/courses/courses.component.css']
})

export class CoursesComponent {
    courses = COURSES;
}
