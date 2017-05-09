import { Component, Input } from '@angular/core';

@Component({
    selector: 'course-date',
    templateUrl: 'src/app/courses/edit-course/course-date/course-date.component.html'
})

export class CourseDateComponent {
    @Input()
    date: string;
}
