import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FakeAuthenticatorService } from './fake-authenticator.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userEmail: string = '';
  userName: string = '';
  userRole: string = '';

  constructor(
    private fakeAuthenticator: FakeAuthenticatorService,
    private localSourceData: LocalStorageService) {
      let user = localSourceData.loadUser();
      if (user) {
        this.userEmail = user.email;
        this.userName = user.name;
        this.userRole = user.role;
      }
    }

  isLogin(): Boolean {
    if (this.userName !== '') {
      return true;
    }
    return false;
  }

  isAdmin(): Boolean {
    if (this.userRole === 'admin') {
      return true;
    }
    return false;
  }

  isReporter(): Boolean {
    if (this.userRole === 'reporter') {
      return true;
    }
    return false;
  }

  login(email: string, password: string): Boolean {
    let user = this.fakeAuthenticator.login(email, password);
    if (user) {
      this.userEmail = user.email;
      this.userName = user.name;
      this.userRole = user.role;
      this.localSourceData.saveUser(user);
      return true;
    } else {
      return false;
    }
  }

  success$ = new Subject<boolean>();

  login$(email: string, password: string): Observable<boolean> {
    this.fakeAuthenticator.login$(email, password).subscribe(
      it => {
        if (it) {
          this.userEmail = it.email;
          this.userName = it.name;
          this.userRole = it.role;
          this.localSourceData.saveUser(it);
          this.success$.next(true)
        } else {
          this.success$.next(false)
        }
      }
    );
    return this.success$.asObservable();
  };

  logout() {
    this.userEmail = '';
    this.userName = '';
    this.userRole = '';
    this.localSourceData.removeUser();
  }
}
