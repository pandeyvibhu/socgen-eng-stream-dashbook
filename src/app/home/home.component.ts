import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashbook-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  private currentTab = 'login';

  ngOnInit(): void {
  }

  public switchTab(tab: string) {
    if(tab !== this.currentTab) {
      this.currentTab = tab;
    }
  }

}
