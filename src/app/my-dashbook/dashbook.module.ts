import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashbookRoutingModule } from './dashbook.routing.module';
import { DashbookNavComponent } from './dashbook-nav/dashbook-nav.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './cards/card/card.component';
import { CardListComponent } from './cards/card-list/card-list.component';
import { DashbookComponent } from './dashbook.component';
import { GroupListComponent } from './groups/group-list/group-list.component';
import { GroupComponent } from './groups/group/group.component';
import { AdminListComponent } from './groups/admin-list/admin-list.component';
import { AdminComponent } from './groups/admin/admin.component';

@NgModule({
    declarations: [
      CardComponent,
      CardListComponent,
      DashbookComponent,
      DashbookNavComponent,
      GroupListComponent,
      GroupComponent,
      AdminListComponent,
      AdminComponent],
    imports: [
      SharedModule,
      DashbookRoutingModule
    ]
  })
export class DashbookModule {}