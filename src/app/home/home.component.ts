import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbook-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  private currentTab = 'login';

  ngOnInit(): void {
  }

}
