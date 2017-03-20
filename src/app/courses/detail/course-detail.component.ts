import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Course} from '../../core';

@Component({
    selector: 'my-course-detail',
    templateUrl: 'src/app/courses/detail/course-detail.component.html',
    styleUrls: ['src/app/courses/detail/course-detail.component.css']
})

export class CourseDetailComponent {
    @Input()
    public course: Course;

    @Output()
    deleteId: EventEmitter<number> = new EventEmitter<number>();

    public removeCourse(id: number): void {
        this.deleteId.emit(id);
    }
}
