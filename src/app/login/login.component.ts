import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    let success = this.authService.login(this.email, this.password);
    if (success) {
      if (this.authService.isAdmin()) {
        this.router.navigate(['statics']);
      } else {
        this.router.navigate(['']);
      }
    }
  }

}
