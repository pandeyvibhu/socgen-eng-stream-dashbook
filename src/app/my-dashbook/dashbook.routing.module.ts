import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UrlShortenerComponent } from '../url-shortener/url-shortener.component';
import { CardListComponent } from './cards/card-list/card-list.component';
import { DashbookComponent } from './dashbook.component';
import { GroupListComponent } from './groups/group-list/group-list.component';
import { ManageGroupsComponent } from './groups/manage-groups/manage-groups.component';

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild([
        { path: 'dashbook',
          component: DashbookComponent,
          resolve: {},
          children: [
            { path: 'shortener',
              component: UrlShortenerComponent,
              resolve: {},
              pathMatch: 'full'
            },
            { path: 'manage',
              component: ManageGroupsComponent
            },
            { path: 'cards',
              component: CardListComponent,
              resolve: {},
              children: [

              ]
            },
            { path: 'groups',
              component: GroupListComponent,
              resolve: {},
              children: []
            },
            { path: '', redirectTo: 'shortener', pathMatch: 'full'},
          ]
      },
      { path: '', redirectTo: 'dashbook', pathMatch: 'full'},
      ]),
      CommonModule
    ]
  })
export class DashbookRoutingModule{}
