import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/model/dashbook/card';
import { Group } from 'src/app/model/dashbook/group';
import { CardService } from 'src/app/services/card/card.service';
import { GroupService } from 'src/app/services/group/group.service';
import { MonitorService } from 'src/app/services/shared/monitor.service';
import { ModifyCardComponent } from '../../cards/modify-card/modify-card.component';
import { NewCardComponent } from '../../cards/new-card/new-card.component';
import { NewGroupComponent } from '../new-group/new-group.component';

@Component({
  selector: 'app-group-cards',
  templateUrl: './group-cards.component.html',
  styleUrls: ['./group-cards.component.scss']
})
export class GroupCardsComponent implements OnInit {

  public groupId: number;
  public cards: Card[];
  public group: Group;
  public filteredCards: Card[];
  public favoriteFilter = false;
  public cardTitleFilter = '';
  public BACKEND_URL = 'http://dashbookparent-env.eba-gbtkatyv.ap-south-1.elasticbeanstalk.com/tiny/';

  private card: Card;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly cardService: CardService,
    private readonly groupService: GroupService,
    private readonly monitorService: MonitorService,
    private readonly dialog: MatDialog,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      parameter => {
      this.groupId = parameter.id;
    });

    this.groupService.findGroupById(this.groupId)
    .subscribe(
      group => {
        this.group = group;
      });

    this.monitorService.$cardSource.subscribe(
      data => {
        if (data){
          this.groupService.findCardsByGroupId(this.groupId).subscribe(
            cardList => {
              this.cards = cardList.cardListDTO;
              this.filteredCards = cardList.cardListDTO;
            },
            err => {
            });
          }},
        );

    this.groupService.findCardsByGroupId(this.groupId)
    .subscribe(
      cardList => {
        this.cards = cardList.cardListDTO;
        this.filteredCards = cardList.cardListDTO;
      });
  }

  openNewCardDialog(): void {
    this.dialog.open(NewCardComponent, { data: {groupId : this.groupId}
    });
  }

  openEditCardDialog(card: any): void {
    this.dialog.open(ModifyCardComponent, {data: card});
  }

  openEditGroupDialog(group: Group): void{
    this.dialog.open(NewGroupComponent, {data: group});
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

  markFav(card: Card, makeFav: boolean): void {
    this.card = new Card(
      card.title,
      card.status,
      card.groupId,
      null,
      makeFav,
      card.description,
      card.id
    );

    this.cardService.modifyCard(this.card)
    .subscribe(
      success => {
        this.monitorService.setCard(true);
      },
      err => {
      });
    }

  deleteCard(cardId: number): void {
    this.cardService.deleteCard(cardId).subscribe(
      success => {
          this.monitorService.setCard(true);
          this.router.navigate(['/home']);
      },
      err => {
      });
  }

  deleteGroup(groupId: number): void {
    this.groupService.deleteGroup(groupId).subscribe(
      success => {
          this.monitorService.setGroup(true);
      },
      err => {
      });
  }

}
