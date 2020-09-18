import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from '../services/auth/auth-guard.service';
import { UrlShortenerComponent } from '../url-shortener/url-shortener.component';
import { CardListComponent } from './cards/card-list/card-list.component';
import { DashbookComponent } from './dashbook.component';
import { GroupAdminsComponent } from './groups/group-admins/group-admins.component';
import { GroupCardsComponent } from './groups/group-cards/group-cards.component';
import { GroupListComponent } from './groups/group-list/group-list.component';
import { ManageGroupsComponent } from './groups/manage-groups/manage-groups.component';

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild([
        { path: 'dashbook',
          component: DashbookComponent,
          canActivate: [AuthGuardService],
          resolve: {},
          children: [
            { path: 'shortener',
              component: UrlShortenerComponent,
              canActivate: [AuthGuardService],
              resolve: {},
              pathMatch: 'full'
            },
            { path: 'manage',
              component: ManageGroupsComponent,
              canActivate: [AuthGuardService],
            },
            { path: 'cards',
              component: CardListComponent,
              canActivate: [AuthGuardService],
              resolve: {},
              children: [

              ]
            },
            { path: 'groups',
              component: GroupListComponent,
              canActivate: [AuthGuardService],
              children: [
                { path: '',
                  component: GroupListComponent,
                  canActivate: [AuthGuardService],
                  pathMatch: 'full'
                },
              ]
            },
            { path: '', redirectTo: 'shortener', pathMatch: 'full'},
          ]
      },
      { path: 'dashbook/groups/:id/cards',
        component: GroupCardsComponent,
        canActivate: [AuthGuardService],
        pathMatch: 'full'
      },
      { path: 'dashbook/groups/:id/admins',
        component: GroupAdminsComponent,
        canActivate: [AuthGuardService],
        pathMatch: 'full'
      },
      { path: '', redirectTo: 'dashbook', pathMatch: 'full'},
      ]),
      CommonModule
    ],
    exports: [RouterModule]
  })
export class DashbookRoutingModule{}
