import {Component} from '@angular/core';

// TODO: use relative paths
@Component({
    selector: 'my-toolbox',
    templateUrl: './src/app/courses/toolbox/toolbox.component.html',
    styleUrls: ['./src/app/courses/toolbox/toolbox.component.css']
})

export class ToolboxComponent {
    public searchName: string;

    public searchCourse(): void {
        console.log(this.searchName);
        this.searchName = '';
    }

    public addCourse(): void {
        console.log('Add Course is pressed');
    }
}
