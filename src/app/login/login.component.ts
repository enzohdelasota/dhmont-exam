import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('focus') focus?: ElementRef;

  email: string = '';
  password: string = '';
  failure = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.focus?.nativeElement.focus();
  }

  login() {
    let success = this.authService.login(this.email, this.password);
    if (success) {
      this.router.navigate(['']);
    } else {
      this.failure = true;
      this.email = '';
      this.password = '';
      this.focus?.nativeElement.focus();
    }
  }

}
