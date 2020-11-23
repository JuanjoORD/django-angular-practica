import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-midialog',
  templateUrl: './midialog.component.html',
  styleUrls: ['./midialog.component.css']
})
export class MidialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MidialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  clickNo(): void {
    this.dialogRef.close()
  }

}
