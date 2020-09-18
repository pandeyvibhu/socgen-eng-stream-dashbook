import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAdminsComponent } from './group-admins.component';

describe('GroupAdminsComponent', () => {
  let component: GroupAdminsComponent;
  let fixture: ComponentFixture<GroupAdminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupAdminsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
