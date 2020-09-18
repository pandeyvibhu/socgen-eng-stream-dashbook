import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Group } from 'src/app/model/dashbook/group';
import { GroupService } from 'src/app/services/group/group.service';
import { MonitorService } from 'src/app/services/shared/monitor.service';
import { NewGroupComponent } from '../new-group/new-group.component';

export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {
  groups: Group[];
  filteredGroups: Group[];
  myGroupsFilter = false;
  groupTitleFilter = '';

  constructor(
    private readonly monitorService: MonitorService,
    private readonly dialog: MatDialog,
    private readonly groupService: GroupService
  ) { }

  ngOnInit(): void {
    this.groupService.findAllGroups().subscribe(
      GroupList => {
        this.groups = GroupList.groupContextResponseDtoList;
        this.filteredGroups = this.groups;
        console.log('groups', this.groups);
        });

    this.monitorService.$groupSource.subscribe(
      data => {
        if (data){
          this.groupService.findAllGroups().subscribe(
            GroupList => {
              this.groups = GroupList.groupContextResponseDtoList;
              this.filteredGroups = this.groups;
              this.myGroupsFilter = false;
            },
            err => {
            });
          }},
        );
  }

  openNewGroupDialog(): void {
    this.dialog.open(NewGroupComponent);
  }

  openEditGroupDialog(group: any): void {
    this.dialog.open(NewGroupComponent, {data: Object.assign({dialogTitle : 'Edit Group'}, group)});
  }

  filterMyGroups(): void {
    this.myGroupsFilter = !this.myGroupsFilter;
    if (this.myGroupsFilter) {
      this.filteredGroups =  this.groups.filter(group => {
        return group.authority;
      });
    } else {
      this.filteredGroups =  this.groups;
    }
  }

  deleteGroup(groupId: number): void {
    this.groupService.deleteGroup(groupId).subscribe(
      success => {
          this.monitorService.setGroup(true);
      },
      err => {
      });
  }

}
