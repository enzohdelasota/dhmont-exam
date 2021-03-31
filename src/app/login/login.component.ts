import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from '../auth.service';
import { LoginLoaderService } from '../login-loader.service';

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

  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loaderService: LoginLoaderService,
    private zone: NgZone,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.focus?.nativeElement.focus();
  }

  login() {
    this.failure = false;
    this.authService.login$(this.email, this.password).subscribe(it => {
      if (it) {
        this.router.navigate(['/dashboard']);
      } else {
        this.failure = true;
        this.email = '';
        this.password = '';
        this.focus?.nativeElement.focus();
      }
    });
  }

}
