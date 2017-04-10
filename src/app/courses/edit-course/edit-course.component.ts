import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
    selector: 'edit-course',
    templateUrl: 'src/app/courses/edit-course/edit-course.component.html',
    styleUrls: ['src/app/courses/edit-course/edit-course.component.css']
})

export class EditCourseComponent {
    constructor(private coursesService: CoursesService){}

    public cancel(): void {
        this.coursesService.cancelEditing();
    }
}
