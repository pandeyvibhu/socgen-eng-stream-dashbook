import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Group } from 'src/app/model/dashbook/group';
import { GroupService } from 'src/app/services/group/group.service';
import { MonitorService } from 'src/app/services/shared/monitor.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss']
})
export class NewGroupComponent implements OnInit {
  groupForm: FormGroup;
  submitted = false;
  group: Group;
  cardTitle;
  private groupId;
  private readonly title = 'title';
  private readonly groupType = 'groupType';
  private readonly description = 'description';

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly groupService: GroupService,
    private readonly monitorService: MonitorService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.cardTitle = this.data ? 'Edit Group' : 'New Group';
    this.groupForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      groupType: ['', Validators.required]
    });

    if (this.data) {
      this.groupForm.controls[this.title].setValue(this.data.title);
      this.groupForm.controls[this.description].setValue(this.data.description);
      this.groupForm.controls[this.groupType].setValue(this.data.groupType);
      this.groupId = this.data.id;
    }
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.groupForm.invalid) {
      return;
    }

    this.group = new Group(
      this.groupForm.controls[this.title].value,
      this.groupForm.controls[this.description].value,
      this.groupForm.controls[this.groupType].value,
      this.groupId
      );

    this.groupService.saveGroup(this.group)
    .subscribe(
      success => {
        this.monitorService.setGroup(true);
      },
      err => {
      });
    }
}
