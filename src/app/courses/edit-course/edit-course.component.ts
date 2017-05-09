import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'edit-course',
    templateUrl: 'src/app/courses/edit-course/edit-course.component.html',
    styleUrls: ['src/app/courses/edit-course/edit-course.component.css']
})

export class EditCourseComponent {
    public editCourseForm: FormGroup;

    constructor(private coursesService: CoursesService,
                private fb: FormBuilder) {
        this.initForm();
    }

    public cancel(): void {
        this.coursesService.cancelEditing();
    }

    private initForm(): void {
        this.editCourseForm = this.fb.group({
            'title': ['', Validators.maxLength(50)],
            'description': ['', Validators.maxLength(500)]
        });
    }
}
