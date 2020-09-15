import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardListComponent } from './cards/card-list/card-list.component';
import { DashbookComponent } from './dashbook.component';
import { GroupListComponent } from './groups/group-list/group-list.component';

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild([
        { path: 'dashbook',
          component: DashbookComponent,
          resolve: {},
          children: [
            { path: 'manage',
              component: DashbookComponent
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
              children: [
                
              ]
            }
          ]
      },
      { path: '', redirectTo: 'dashbook', pathMatch: 'full'},
      ]),
      CommonModule
    ]
  })
export class DashbookRoutingModule{
}