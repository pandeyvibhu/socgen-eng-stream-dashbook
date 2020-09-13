import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './signup/login/login.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import { CardComponent } from './cards/card/card.component';
import { CardListComponent } from './cards/card-list/card-list.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './signup/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AppNavigationComponent,
    UrlShortenerComponent,
    CardComponent,
    CardListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
