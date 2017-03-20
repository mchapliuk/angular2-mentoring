/**
 * Main courses panel, includes search, add course, list of courses
 */
import {Component, OnInit} from '@angular/core';

import {Course, CoursesService} from '../core';

// TODO: use relative paths
@Component({
    selector: 'my-courses',
    templateUrl: 'src/app/courses/courses.component.html',
    styleUrls: ['src/app/courses/courses.component.css']
})

export class CoursesComponent implements OnInit {
    public courses: Course[] = [];

    constructor(private coursesService: CoursesService) {
    }

    ngOnInit(): void {
        console.log('Courses Component is initialized');
        this.courses = this.coursesService.getCourses();
    }

    public deleteCourse(id: number): void {
        this.coursesService.removeCourse(id)
            .then(() => console.log(`Course with id ${id} has been deleted`));
    }
}
