import { Injectable } from '@angular/core';
import { RequestOptions, RequestMethod, Request, Response, URLSearchParams } from '@angular/http';
import AuthHttp from "../core/http-interceptor.service";

import { Course } from './course.interface';

import { LoaderBlockService } from '../loader-block';

import { FindCoursePipe } from '../core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { BASE_API_URL } from '../config/config';
const COURSES_URL = `${BASE_API_URL}/courses`;
const COURSES_SEARCH_URL = `${BASE_API_URL}/courses/search`;

const PAGE_SIZE = 5;

/**
 * A Service manages Courses
 */
@Injectable()
export class CoursesService {
    public isEditingMode: boolean = false;
    private pageNum: number = 0;

    constructor(private loaderBlockService: LoaderBlockService,
                private findCourse: FindCoursePipe,
                private http: AuthHttp) {
    }

    public getCourses(): Observable<Course[]> {
        return this.fetchCourses();
    }

    public getCourse(id: number|string): Observable<Course> {
        let options = new RequestOptions();
        options.method = RequestMethod.Get;
        options.url = COURSES_URL + '/' + id;


        let request = new Request(options);

        return this.http
            .request(request)
            .map((res: Response) => res.json() as Course);
    }

    public getNextCourses(): Observable<Course[]> {
        this.pageNum++;
        return this.fetchCourses();
    }

    /**
     * Finds courses that matches given search query
     * @param {string} searchText
     */
    public findCourses(searchText: string): Observable<Course[]> {
        let options = new RequestOptions();
        options.method = RequestMethod.Get;
        options.url = COURSES_SEARCH_URL;

        let urlParams = new URLSearchParams();
        urlParams.set('searchName', searchText);
        options.search = urlParams;
        let request = new Request(options);

        return this.http
            .request(request)
            .map((res: Response) => res.json() as Course[]);
    }


    public deleteCourse(id: string|number): Observable<Course[]> {
        let options = new RequestOptions();
        options.method = RequestMethod.Delete;
        options.url = `${COURSES_URL}/${id}`;

        let request = new Request(options);

        return this.http
            .request(request)
            .map((res: Response) => res.json() as Course[]);
    }

    private fetchCourses(): Observable<Course[]> {
        let options = new RequestOptions();
        options.method = RequestMethod.Get;
        options.url = COURSES_URL;

        let urlParams = new URLSearchParams();
        urlParams.set('start', '' + this.pageNum);
        urlParams.set('count', '' + PAGE_SIZE);
        options.search = urlParams;
        let request = new Request(options);

        return this.http
            .request(request)
            .map((res: Response) => res.json());
    }

    public getIsEditingMode(): boolean {
        return this.isEditingMode;
    }

    public saveCourse(data: any): Observable<any> {
        let options = new RequestOptions();
        options.method = RequestMethod.Post;
        options.url = COURSES_URL;
        options.body = data || {};

        return this.http
            .request(new Request(options))
            .map((res: Response) => res.json());
    }
}
