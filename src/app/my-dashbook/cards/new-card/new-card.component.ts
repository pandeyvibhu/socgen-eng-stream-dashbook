import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Card } from 'src/app/model/dashbook/card';
import { CardService } from 'src/app/services/card/card.service';
import { MonitorService } from 'src/app/services/shared/monitor.service';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {

  cardForm: FormGroup;
  submitted = false;
  private card: Card;
  private readonly defaultGroupId = 1;
  private readonly returnUrl = 'my-home/dashbook/cards';
  private readonly url = 'url';
  private readonly title = 'title';
  private readonly favorite = 'favorite';
  private readonly description = 'description';
  private readonly Active = 'ACTIVE';

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly cardService: CardService,
    private readonly monitorService: MonitorService
  ) { }

  ngOnInit(): void {
    this.cardForm = this.formBuilder.group({
      favorite: [true],
      title: ['', Validators.required],
      description: ['', Validators.required],
      url: ['', Validators.required]
    });
  }


  onSubmit(): void {
    this.submitted = true;
    if (this.cardForm.invalid) {
      return;
    }

    this.card = new Card(
      this.cardForm.controls[this.title].value,
      this.Active,
      this.defaultGroupId,
      this.cardForm.controls[this.url].value,
      this.cardForm.controls[this.favorite].value,
      this.cardForm.controls[this.description].value,
      );

    this.cardService.createCard(this.card)
    .subscribe(
      success => {
        this.monitorService.setCard(true);
      },
      err => {
      });
    }
}
