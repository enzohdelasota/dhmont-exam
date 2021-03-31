import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tableColumns: string[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.isReporter()) {
      this.tableColumns = ['id', 'description', 'category', 'state', 'image'];
    } else {
      this.tableColumns = ['id', 'description', 'category', 'user', 'stateChange', 'image'];
    }
  }

  isReporter(): Boolean {
    return this.authService.isReporter();
  }
}
