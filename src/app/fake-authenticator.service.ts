import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoginLoaderService } from './login-loader.service';

const USERS = [
  { email: 'admin@example.com', password: 'admin', name: 'John Doe', role: 'admin' },
  { email: 'user@example.com', password: 'user', name: 'Juan Peréz', role: 'reporter' },
  { email: 'user2@example.com', password: 'user2', name: 'Ivan Van Vasquez', role: 'reporter' },
]

export interface User {
  email: string;
  name: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class FakeAuthenticatorService {

  constructor(private loaderService: LoginLoaderService) { }

  login(email: string, password: string) {
    let user = USERS.find(it => it.email === email && it.password === password);
    if (user) {
      return { email: user.email, name: user.name, role: user.role } as User;
    }
    return null;
  }

  private user$ = new Subject<User>();

  login$(email: string, password: string): Observable<User> {
    this.loaderService.show();
    setTimeout(() => {
      this.user$.next(this.login(email, password) || undefined);
      this.loaderService.hide();
    }, 2000);
    return this.user$.asObservable();
  }
}
