import { Injectable } from '@angular/core';

const USERS = [
  { email: 'admin@example.com', password: 'admin', name: 'John Doe', role: 'admin' },
  { email: 'user@example.com', password: 'user', name: 'Juan Peréz', role: 'reporter' },
  { email: 'user2@example.com', password: 'user2', name: 'Ivan Van Vasquez', role: 'reporter' },
]

@Injectable({
  providedIn: 'root'
})
export class FakeAuthenticatorService {

  constructor() { }

  login(email: string, password: string) {
    let user = USERS.find(it => it.email === email && it.password === password);
    if (user) {
      return { email: user.email, name: user.name, role: user.role };
    }
    return null;
  }
}
