import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Course } from './course.interface';
import { CoursesService } from './courses.service';
import { Observable } from 'rxjs';

@Injectable()
export class CourseDetailsResolveService implements Resolve<Course> {

    constructor(private service: CoursesService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
        let id = +route.params['id'];
        return this.service.getCourse(id);
    }
}
