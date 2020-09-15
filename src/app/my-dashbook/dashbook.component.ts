import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashbook-home',
  templateUrl: './dashbook.component.html',
  styleUrls: ['./dashbook.component.scss']
})
export class DashbookComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }

}
