import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  user: string = '';
  @Output() toggleDrawer = new EventEmitter<boolean>();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.authService.userName;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  toggle() {
    this.toggleDrawer.emit(true);
  }

}
