import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/share';

@Injectable()
export class LoaderBlockService {
    public status: ReplaySubject<boolean> = new ReplaySubject();
    private activeState: boolean = false;

    public start(): void {
        this.activeState = true;
        this.status.next(true);
    }

    public stop(): void {
        this.activeState = false;
        this.status.next(false);
    }
}
