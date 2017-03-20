import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
    selector: 'courses-page',
    templateUrl: 'src/app/courses-page/courses-page.component.html',
    styleUrls: ['src/app/courses-page/courses-page.component.css']
})

export class CoursesPageComponent implements OnInit, OnDestroy {
    ngOnInit():void {
        console.log('Courses Page initialized');
    }

    ngOnDestroy():void {
        console.log('Courses Page destroyed');
    }
}