import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/users';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  /** GET Users */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(_ => console.log('fetched users')),
        map((users: any[]) => users.map(u => new User(u._id, u._firstname, u._lastname, u._email, u._password, u._color))),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }


  /** POST: add a new user to the server */
  addUser(user: User): Observable<User> {
    console.log('add user method:', user);
    return this.http.post<User>(this.usersUrl, user, this.httpOptions).pipe(
      tap((newUser: User) => console.log(`pre added user w/ id=${newUser.id}`, newUser)),
      map((newUser: any) => new User(newUser._id, newUser._firstname, newUser._lastname, newUser._email, newUser._password, newUser._color)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;
    console.log('delete method');
    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted hero id=${id}`)),
      catchError(this.handleError<User>('deleteHero'))
    );
  }

  /** PUT: update the hero on the server */
  updateUser(user: User): Observable<any> {
    console.log('user:', user);

    return this.http.put(this.usersUrl, user.toJson(), this.httpOptions).pipe(
      tap(_ => console.log(`updated user id=${user.id}`)),
      map(((_) => user)),
      catchError(this.handleError<any>('updateUser'))
    );
  }




  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
