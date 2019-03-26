import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'trm-confirm-deactivate-dialog',
  templateUrl: './confirm-deactivate-dialog.component.html',
  styleUrls: ['./confirm-deactivate-dialog.component.css']
})
export class ConfirmDeactivateDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmDeactivateDialogComponent>) { }

  ngOnInit() {
  }

}
