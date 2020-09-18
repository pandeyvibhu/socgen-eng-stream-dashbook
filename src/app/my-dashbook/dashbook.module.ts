import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashbookRoutingModule } from './dashbook.routing.module';
import { SharedModule } from '../shared/shared.module';
import { CardListComponent } from './cards/card-list/card-list.component';
import { DashbookComponent } from './dashbook.component';
import { GroupListComponent } from './groups/group-list/group-list.component';
import { AdminComponent } from './groups/admin/admin.component';
import { ManageGroupsComponent } from './groups/manage-groups/manage-groups.component';
import { NewCardComponent } from './cards/new-card/new-card.component';
import { NewGroupComponent } from './groups/new-group/new-group.component';
import { CardFilterPipe } from './pipes/CardSearchPipe';
import { ModifyCardComponent } from './cards/modify-card/modify-card.component';
import { ModifyGroupComponent } from './groups/modify-group/modify-group.component';
import { GroupFilterPipe } from './pipes/GroupSerachPipe';
import { CardComponent } from './cards/card/card.component';
import { GroupCardsComponent } from './groups/group-cards/group-cards.component';
import { GroupAdminsComponent } from './groups/group-admins/group-admins.component';

@NgModule({
    declarations: [
      CardListComponent,
      DashbookComponent,
      GroupListComponent,
      AdminComponent,
      ManageGroupsComponent,
      NewCardComponent,
      CardFilterPipe,
      GroupFilterPipe,
      NewGroupComponent,
      ModifyCardComponent,
      ModifyGroupComponent,
      CardComponent,
      GroupCardsComponent,
      GroupAdminsComponent],
    imports: [
      SharedModule,
      DashbookRoutingModule
    ]
  })
export class DashbookModule {}
