import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, NgModel, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { CourseDetailComponent }  from './detail/course-detail.component';
import { CoursesComponent } from './courses-list/courses.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseDateComponent } from './edit-course/course-date/course-date.component';
import { CourseDurationComponent } from './edit-course/course-duration/course-duration.component';


// Directives
import { HighlightCourseDirective } from './highlight-course.directive';

// Services
import { CoursesService } from './courses.service';

// Pipes
import {
    FormatMinutesPipe,
    OrderByPipe
} from '../core';
import { FindCoursePipe } from '../core/find-course.pipe';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
    declarations: [
        CoursesComponent,
        CourseDetailComponent,
        EditCourseComponent,
        CourseDateComponent,
        CourseDurationComponent,
        HighlightCourseDirective,
        FormatMinutesPipe,
        OrderByPipe
    ],
    exports: [CoursesComponent, EditCourseComponent],
    providers: [CoursesService, FindCoursePipe]
})

export class CoursesModule {
}
