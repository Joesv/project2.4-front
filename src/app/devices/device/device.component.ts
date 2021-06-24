import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../../dialogs/confirm-dialog/confirm-dialog.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {style, state, animate, transition, trigger} from '@angular/animations';
import {MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(200, style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(200, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class DeviceComponent implements OnInit {
  @Input() deviceTitle: string;
  @Input() deviceType: string;
  @Input() avatar?: string;
  deleted = false;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.deviceTitle = this.deviceTitle ?? 'Unknown device';
    this.deviceType = this.deviceType ?? 'Unknown type';
  }

  edit(): void {
    console.log(`Edit device ${this.deviceTitle}`);
  }

  delete(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: `Are you sure you want to delete ${this.deviceTitle}?`,
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (!confirmed) {
        return;
      }

      this.deleted = true;

      const snackBarRef = this.snackBar.open(`Deleted ${this.deviceTitle}.`, 'Undo', {
        duration: 3000
      });

      snackBarRef.onAction().subscribe(() => {
        // 'Undo'!
        this.deleted = false;
      });

      snackBarRef.afterDismissed().subscribe((dismiss) => {
        if (!dismiss.dismissedByAction) {
          // User hasn't pressed undo, so actually delete.
          console.log(`Delete device ${this.deviceTitle}`);
        }
      });
    });
  }
}
