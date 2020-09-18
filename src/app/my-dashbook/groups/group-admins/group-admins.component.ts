import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/model/dashbook/group';
import { GroupList } from 'src/app/model/dashbook/group-list.model';
import { User } from 'src/app/model/user';
import { GroupService } from 'src/app/services/group/group.service';

@Component({
  selector: 'app-group-admins',
  templateUrl: './group-admins.component.html',
  styleUrls: ['./group-admins.component.scss']
})
export class GroupAdminsComponent implements OnInit {

  public groupId: number;
  public admins: User[];
  public group: Group;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly groupService: GroupService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {

    this.route.params
    .subscribe(
      parameter => {
      this.groupId = parameter.id;
    });

    this.groupService.findGroupById(this.groupId)
    .subscribe(
      group => {
        this.group = group;
      });

    this.groupService.findAdminsByGroupId(this.groupId)
    .subscribe(
      adminList => {
        this.admins = adminList.groupAdminResponseDtoList;
      });
  }
}
