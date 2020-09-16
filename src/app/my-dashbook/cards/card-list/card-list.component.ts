import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { Card } from 'src/app/model/dashbook/card';
import { CardService } from 'src/app/services/card/card.service';
import { MonitorService } from 'src/app/services/shared/monitor.service';
import { ModifyCardComponent } from '../modify-card/modify-card.component';
import { NewCardComponent } from '../new-card/new-card.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  public cards: Card[];
  public filteredCards: Card[];
  public favoriteFilter = false;
  public cardTitleFilter = '';
  public BACKEND_URL = 'http://dashbookparent-env.eba-gbtkatyv.ap-south-1.elasticbeanstalk.com/tiny/';

  private cardSource = new Subject<any>();

  constructor(
    private readonly cardService: CardService,
    private readonly monitorService: MonitorService,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.cardService.findAllCards().subscribe(
      cardList => {
        this.cards = cardList.cardListDTO;
        this.filteredCards = cardList.cardListDTO;
        });

    this.monitorService.$cardSource.subscribe(
      data => {
        if (data){
          this.cardService.findAllCards().subscribe(
            cardList => {
              this.cards = cardList.cardListDTO;
              this.filteredCards = cardList.cardListDTO;
            },
            err => {
            });
          }},
        );
  }

  openNewCardDialog(): void {
    this.dialog.open(NewCardComponent, {
    });
  }

  openEditCardDialog(card: any): void {
    this.dialog.open(ModifyCardComponent, {data: card});
  }

  getFilteredTasks(): void {
    this.favoriteFilter = !this.favoriteFilter;
    if (this.favoriteFilter) {
      this.filteredCards =  this.cards.filter(card => {
        return card.favorite;
      });
    } else {
      this.filteredCards =  this.cards;
    }
  }

  deleteCard(cardId: number): void {
    this.cardService.deleteCard(cardId).subscribe(
      success => {
          this.monitorService.setCard(true);
      },
      err => {
      });
  }

}
