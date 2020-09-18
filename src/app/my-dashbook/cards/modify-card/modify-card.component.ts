import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Card } from 'src/app/model/dashbook/card';
import { CardService } from 'src/app/services/card/card.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MonitorService } from 'src/app/services/shared/monitor.service';

@Component({
  selector: 'app-modify-card',
  templateUrl: './modify-card.component.html',
  styleUrls: ['./modify-card.component.scss']
})
export class ModifyCardComponent implements OnInit {

  cardModifyForm: FormGroup;
  submitted = false;
  private card: Card;
  private readonly defaultGroupId = 0;
  private readonly returnUrl = 'my-home/dashbook/cards';
  private readonly title = 'title';
  private readonly favorite = 'favorite';
  private readonly description = 'description';
  private readonly Active = 'ACTIVE';

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly cardService: CardService,
    private readonly monitorService: MonitorService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.cardModifyForm = this.formBuilder.group({
      favorite: [this.data.favorite],
      title: [this.data.title, Validators.required],
      description: [this.data.description, Validators.required]
    });
  }

  onSubmit(cardId: number, groupId: number): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.cardModifyForm.invalid) {
      return;
    }

    this.card = new Card(
      this.cardModifyForm.controls[this.title].value,
      this.Active,
      groupId,
      null,
      this.cardModifyForm.controls[this.favorite].value,
      this.cardModifyForm.controls[this.description].value,
      cardId
    );

    this.cardService.modifyCard(this.card)
    .subscribe(
      success => {
        this.monitorService.setCard(true);
      },
      err => {
      });
    }
}
