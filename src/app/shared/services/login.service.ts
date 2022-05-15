import { Injectable } from '@angular/core';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  admin: IUser = {
    profileImageLink: '/assets/images/businessman.jpg',
    username: 'admin',
    firstName: 'Admin',
    lastName: 'Admin',
    email: 'admin@example.com',
    password: 'admin',
  };

  constructor() {}

  login(user: IUser): boolean {
    if (
      user.username === this.admin.username &&
      user.password === this.admin.password
    ) {
      localStorage.setItem('user', JSON.stringify(this.admin));
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }
}
