import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

import {Course} from '../../core';

@Component({
    selector: 'my-course-detail',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'src/app/courses/detail/course-detail.component.html',
    styleUrls: ['src/app/courses/detail/course-detail.component.css']
})

/**
 * Course Info panel
 */
export class CourseDetailComponent {
    @Input()
    public course: Course;

    @Output()
    deleteId: EventEmitter<number> = new EventEmitter<number>();

    /**
     * Remove Course action
     * @param {Number} id - Identifier of the Course
     */
    public removeCourse(id: number): void {
        this.deleteId.emit(id);
    }
}
