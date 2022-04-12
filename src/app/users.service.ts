import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: { email: string; password: string }[] = [
    { email: 'test@test.com', password: 'test' },
    { email: 'bassem@test.com', password: 'test' },
  ];

  constructor() {}

  authenticateUser(loginMail: string, loginPassword: string): boolean {
    return this.users.some((user) => {
      return loginMail === user.email && loginPassword === user.password;
    });
  }
}
