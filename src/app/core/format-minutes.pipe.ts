import {Pipe, PipeTransform} from '@angular/core';

/**
 * Formats a number of minutes into a more readable format as Hh MMmin
 * Usage:
 *  value | formatMinutes
 * Example:
 *  {{ 125 | formatMinutes }} formats to 2h 5min
 */
@Pipe({
    name: 'formatMinutes'
})
export class FormatMinutesPipe implements PipeTransform {
    transform(value: number): string {
        let minutes = '0' + value % 60;
        let hours = Math.floor(value / 60);

        return hours
            ?  `${('0' + hours).slice(-2)}h ${minutes.slice(-2)}min`
            : `${minutes.slice(-2)}min`;
    }
}
