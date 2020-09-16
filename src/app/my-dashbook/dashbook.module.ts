import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashbookRoutingModule } from './dashbook.routing.module';
import { SharedModule } from '../shared/shared.module';
import { CardListComponent } from './cards/card-list/card-list.component';
import { DashbookComponent } from './dashbook.component';
import { GroupListComponent } from './groups/group-list/group-list.component';
import { GroupComponent } from './groups/group/group.component';
import { AdminListComponent } from './groups/admin-list/admin-list.component';
import { AdminComponent } from './groups/admin/admin.component';
import { ManageGroupsComponent } from './groups/manage-groups/manage-groups.component';
import { NewCardComponent } from './cards/new-card/new-card.component';
import { NewGroupComponent } from './groups/new-group/new-group.component';
import { CardFilterPipe } from './pipes/CardSearchPipe';
import { ModifyCardComponent } from './cards/modify-card/modify-card.component';

@NgModule({
    declarations: [
      CardListComponent,
      DashbookComponent,
      GroupListComponent,
      GroupComponent,
      AdminListComponent,
      AdminComponent,
      ManageGroupsComponent,
      NewCardComponent,
      CardFilterPipe,
      NewGroupComponent,
      ModifyCardComponent],
    imports: [
      SharedModule,
      DashbookRoutingModule
    ]
  })
export class DashbookModule {}
