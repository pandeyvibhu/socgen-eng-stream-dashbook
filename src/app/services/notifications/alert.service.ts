import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlertService {
    private subject = new Subject<any>();
    private keepAfterNavigationChange = false;
    private toast: {type: string, message: string};

    constructor(private router: Router) {
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                } else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
    }

    success(message: string, keepAfterNavigationChange = false): void {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.toast.type = 'success';
        this.toast.message = message;
        this.subject.next(this.toast);
    }

    error(message: string, keepAfterNavigationChange = false): void {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.toast.type = 'error';
        this.toast.message = message;
        this.subject.next(this.toast);
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
