import { Injectable } from '@angular/core';
// import { Http, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('php/users_get.php');
  }

  getUser(id:string): Observable<User> {

    const params = new HttpParams().set('id', '3');
    const options = {params: params};

    return this.http.get<User>('php/users_get.php', options);
  }

  setUser(user: User): any {
    const data = JSON.stringify(user);
    return this.http.post('php/users_set.php', data);
  }

  deleteUser(id: number): any {
    const data = JSON.stringify({id: id, mode: 'delete'});
    return this.http.post('php/users_set.php', data);
  }
}
