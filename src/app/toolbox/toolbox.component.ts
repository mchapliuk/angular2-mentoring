import {Component} from '@angular/core';

@Component({
    selector: 'my-toolbox',
    templateUrl: './src/app/toolbox/toolbox.component.html',
    styleUrls: ['./src/app/toolbox/toolbox.component.css']
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
