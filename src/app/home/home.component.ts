import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tableColumns: string[] = [];

  constructor(private authService: AuthService, public dialog: MatDialog) { }

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

  isMobile(): Boolean {
    if (innerWidth < 800) {
      return true;
    }
    return false;
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '100%',
    });
  }
}
