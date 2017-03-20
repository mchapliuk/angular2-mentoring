/**
 * Main courses panel, includes search, add course, list of courses
 */
import {Component, OnInit} from '@angular/core';

import {Course} from '../course.interface';
import {CoursesService} from '../courses.service';

// TODO: use relative paths
@Component({
    selector: 'my-courses',
    templateUrl: 'src/app/courses/courses-list/courses.component.html',
    styleUrls: ['src/app/courses/courses-list/courses.component.css']
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
        // Is window.confirm enough for now? Or create a modal window with ng2?
        if (confirm('Are you sure you want to remove the course?')) {
            this.coursesService.removeCourse(id)
                .then(() => console.log(`Course with id ${id} has been deleted`));
        } else {
            console.log('Removing canceled');
        }
    }
}
