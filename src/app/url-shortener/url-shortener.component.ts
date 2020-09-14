import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashbook-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.scss']
})
export class UrlShortenerComponent implements OnInit {

  urlForm: FormGroup;
  redirectionUrl: string;
  urlHash: string;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
      this.urlForm = this.formBuilder.group({
          url: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f(): object { return this.urlForm.controls; }

  onSubmit(): void {
      // stop here if form is invalid
      if (this.urlForm.invalid) {
          return;
      }

      this.submitted = true;
      this.urlHash = '402eec4e';
      this.redirectionUrl = 'www.exampleUrl.com/402eec4e';
    }
}
