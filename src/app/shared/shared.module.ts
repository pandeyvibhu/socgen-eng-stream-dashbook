import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTableModule } from '@angular/material/table';
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
      RouterModule ,
      ReactiveFormsModule,
      OwlDateTimeModule,
      OwlNativeDateTimeModule
    ],
    exports: [
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    UrlShortenerComponent,
    MatTableModule,
    ClipboardModule,
    RouterModule
    ]
  })
export class SharedModule{}
