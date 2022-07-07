import { Injectable } from '@angular/core';
import { IUser } from './IUser';

import { Observable, of } from 'rxjs';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  constructor() {}

  getUsers(): Observable<IUser[]> {
    const users = of (USERS);
    return users;
  }

  deleteUser(user: IUser): Observable<IUser[]> {
    for (let i=0; i<USERS.length; i++)
      if (USERS[i].id == user.id)
        USERS.splice(i,1);
    let users = of (USERS);
    return users;
  }

}