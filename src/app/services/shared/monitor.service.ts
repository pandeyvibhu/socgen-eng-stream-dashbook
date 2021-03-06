import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Card } from 'src/app/model/dashbook/card';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private loginData = new Subject<any>();
  login = this.loginData.asObservable();

  private cardSubject = new Subject<any>();
  $cardSource = this.cardSubject.asObservable();

  private groupSubject = new Subject<any>();
  $groupSource = this.groupSubject.asObservable();

  constructor() { }

  setLoginFlag(login): any{
    this.loginData.next(login);
  }

  setCard(card): void{
    this.cardSubject.next(card);
  }

  setGroup(group): void{
    this.groupSubject.next(group);
  }
}

