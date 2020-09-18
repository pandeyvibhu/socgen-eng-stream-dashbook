import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GroupedObservable, Observable } from 'rxjs';
import { CardList } from 'src/app/model/dashbook/card-list.model';
import { Group } from 'src/app/model/dashbook/group';
import { GroupAdminList } from 'src/app/model/dashbook/group-admin-list.model';
import { GroupList } from 'src/app/model/dashbook/group-list.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  public findAllGroups(): Observable<GroupList>{
    return this.http.get<GroupList>('/server/groups/all');
  }

  public findGroupById(groupId: number): Observable<Group>{
    return this.http.get<Group>('/server/groups/' + groupId);
  }

  public saveGroup(group: Group): Observable<any> {
    return this.http.post<any>('/server/groups/save', group);
  }

  public deleteGroup(groupID: number): Observable<any> {
    return this.http.delete<any>('/server/groups/delete-context/' + groupID);
  }

  public findCardsByGroupId(groupId: number): Observable<CardList> {
    return this.http.get<CardList>('/server/groups/' + groupId + '/cards');
  }

  public findAdminsByGroupId(groupId: number): Observable<GroupAdminList> {
    return this.http.get<GroupAdminList>('/server/groups/' + groupId + '/admins');
  }

}
