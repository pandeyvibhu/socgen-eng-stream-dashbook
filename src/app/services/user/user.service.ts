import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(`server/users`);
    }

    getById(id: number): Observable<User> {
        return this.http.get<User>(`server/users/${id}`);
    }

    register(user: User): Observable<object> {
        return this.http.post(`server/auth/register`, user);
    }

    update(user: User): Observable<object> {
        return this.http.put(`server/users/${user.id}`, user);
    }

    delete(id: number): Observable<object> {
        return this.http.delete(`server/users/${id}`);
    }
}
