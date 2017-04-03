import { Directive, ElementRef, Input, OnInit } from '@angular/core';

const MILLISECONDS_IN_DAY = 86400000;
const FRESH_COURSE_PERIOD = 14; // 14 days

@Directive({
    selector: '[highlightCourse]'
})

export class HighlightCourseDirective implements OnInit {
    @Input('highlightCourse') courseDate: string;

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        const courseDate = new Date(this.courseDate);
        const now = new Date();

        if (courseDate > now) {
            this.elementRef.nativeElement.classList.add('upcoming-course');
        } else {
            const timeDiff = Math.abs(now.getTime() - courseDate.getTime());
            const diffDays = Math.ceil(timeDiff / MILLISECONDS_IN_DAY);

            if (diffDays <= FRESH_COURSE_PERIOD) {
                this.elementRef.nativeElement.classList.add('fresh-course');
            }
        }
    }
}