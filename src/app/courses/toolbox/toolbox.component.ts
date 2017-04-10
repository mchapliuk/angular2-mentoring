import { Component, ChangeDetectionStrategy } from '@angular/core';

import { CoursesService } from '../courses.service';

// TODO: use relative paths
@Component({
    selector: 'my-toolbox',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './src/app/courses/toolbox/toolbox.component.html',
    styleUrls: ['./src/app/courses/toolbox/toolbox.component.css']
})

export class ToolboxComponent {
    public searchName: string;

    constructor(private coursesService: CoursesService) {}

    public searchCourse(): void {
        console.log(this.searchName);
        this.coursesService.findCourses(this.searchName);
        this.searchName = '';
    }

    public addCourse(): void {
        console.log('Add Course is pressed');
        this.coursesService.goToAddCourse();
    }
}
