import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

// Components
import {CoursesComponent} from './courses-list/courses.component';
import {CourseDetailComponent}  from './detail/course-detail.component';
import {ToolboxComponent} from './toolbox/toolbox.component';

// Services
import {CoursesService} from './courses.service';

// Interfaces
import {Course} from './course.interface';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        CoursesComponent,
        CourseDetailComponent,
        ToolboxComponent
    ],
    exports: [CoursesComponent, ToolboxComponent],
    providers: [CoursesService]
})

export class CoursesModule {
}
