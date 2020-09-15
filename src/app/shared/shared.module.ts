import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { UrlShortenerComponent } from '../url-shortener/url-shortener.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
    HeaderComponent,
    UrlShortenerComponent],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      OwlDateTimeModule,
      OwlNativeDateTimeModule,
    ],
    exports: [
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    UrlShortenerComponent,
    RouterModule
    ]
  })
export class SharedModule {}