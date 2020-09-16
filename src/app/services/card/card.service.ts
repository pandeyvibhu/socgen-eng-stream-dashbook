import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/model/dashbook/card';
import { CardList } from 'src/app/model/dashbook/card-list.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  public findAllCards(): Observable<CardList>{
    return this.http.get<CardList>('/server/cards/all');
  }

  public modifyCard(modifiedCard: Card): Observable<any> {
    return this.http.post<any>('/server/cards/modify', modifiedCard);
  }

  public createCard(card: Card): Observable<any> {
    return this.http.post<any>('/server/cards/create', card);
  }

  public deleteCard(cardId: number): Observable<any> {
    return this.http.delete<any>('/server/cards/delete/' + cardId);
  }
}
