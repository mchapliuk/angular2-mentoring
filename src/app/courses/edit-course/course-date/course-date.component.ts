import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'course-date',
    templateUrl: 'src/app/courses/edit-course/course-date/course-date.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CourseDateComponent),
            multi: true
        }
    ]
})

export class CourseDateComponent implements ControlValueAccessor {

    private viewDate: string;

    propagateChange = (_: any) => { };

    @Input()
    set value(value: any) {
        this.viewDate = this.formatDate(value);
        this.propagateChange(this.parseDate(this.viewDate));
    }

    get value() {
        return this.viewDate;
    }

    public writeValue(originDate: any) {
        this.value = originDate;
    }

    public registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    public registerOnTouched() {
    }

    /**
     * Parses 'dd/MM/yyyy' into the datetime
     * @param {String} date - a date in 'dd/MM/yyyy' format
     * @return {Date} JS Date value
     */
    private parseDate(date: string): any {
        let parsedDateArr: string[] = date.split('/');
        let day: string = parsedDateArr[0];
        let month: string = parsedDateArr[1];
        let year: string = parsedDateArr[2];
        let res: any;
        try {
            res = new Date(+year, +month - 1, +day);
        } catch (ex) {
            res = 'Inv Date';
        }
        return res;
    }

    /**
     * Formats JS Date value into formatted ouput
     * @param {Date} date
     * @return {String} formatted output as 'dd/MM/yyyy'
     */
    private formatDate(date: any): string {
        let result = 'Invalid Date';
        let dateAsDate = new Date(date);
        if (dateAsDate) {
            let day = dateAsDate.getDay();
            let month = dateAsDate.getMonth() + 1;
            let year = dateAsDate.getFullYear();
            result = `${('0' + day).slice(-2)}/${('0' + month).slice(-2)}/${year}`;
        }
        return result;
    }
}
