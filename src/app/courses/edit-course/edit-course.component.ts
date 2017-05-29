import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import {
    FormBuilder,
    Validators,
    FormGroup
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Course } from '../course.interface';

@Component({
    selector: 'edit-course',
    templateUrl: 'src/app/courses/edit-course/edit-course.component.html',
    styleUrls: ['src/app/courses/edit-course/edit-course.component.css']
})

export class EditCourseComponent implements OnInit {
    public editCourseForm: FormGroup;

    constructor(private coursesService: CoursesService,
                private fb: FormBuilder,
                private location: Location,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        if (this.route.snapshot.url[1].path === 'new') {
            this.initForm();
        } else {
            this.route.data
                .subscribe((course: Course) => {
                    this.initForm(course);
                });
        }

    }

    public save(formData: any): void {
        this.coursesService.saveCourse(formData).subscribe((data: any) => {
            this.location.back();
        });
    }

    public cancel(): void {
        this.location.back();
    }

    private initForm(course?: Course): void {
        this.editCourseForm = this.fb.group({
            'title': [course && course['0'].name || '', Validators.maxLength(50)],
            'date': [course && course['0'].date || ''],
            'description': [course && course[0].description || '', Validators.maxLength(500)]
        });
    }
}
