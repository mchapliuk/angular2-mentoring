import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { CoursesComponent } from './courses-list/courses.component';
import { CourseDetailComponent }  from './detail/course-detail.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseDateComponent } from './edit-course/course-date/course-date.component';
import { CourseDurationComponent } from './edit-course/course-duration/course-duration.component';


// Directives
import { HighlightCourseDirective } from "./highlight-course.directive";

// Services
import { CoursesService } from './courses.service';

// Interfaces
import { Course } from './course.interface';

// Pipes
import {
    FormatMinutesPipe,
    OrderByPipe
} from '../core';
import { FindCoursePipe } from "../core/find-course.pipe";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        CoursesComponent,
        CourseDetailComponent,
        ToolboxComponent,
        EditCourseComponent,
        CourseDateComponent,
        CourseDurationComponent,
        HighlightCourseDirective,
        FormatMinutesPipe,
        OrderByPipe
    ],
    exports: [CoursesComponent, ToolboxComponent, EditCourseComponent],
    providers: [CoursesService, FindCoursePipe]
})

export class CoursesModule {
}
