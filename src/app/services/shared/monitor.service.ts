import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private loginData = new Subject<any>();
  login = this.loginData.asObservable();

  constructor() { }

  setLoginFlag(login): any{
    console.log('came here');
    this.loginData.next(login);
  }
}
