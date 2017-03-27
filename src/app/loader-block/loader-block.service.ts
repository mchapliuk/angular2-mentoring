import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/share';

@Injectable()
export class LoaderBlockService {
    public status: Subject<boolean> = new Subject();
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
