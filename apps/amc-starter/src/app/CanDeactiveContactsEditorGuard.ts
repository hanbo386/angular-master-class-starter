import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { CanDeactivate } from '@angular/router';
import { ConfirmDeactivateDialogComponent } from './confirm-deactivate-dialog/confirm-deactivate-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CanDeactiveContactsEditorGuard implements CanDeactivate<ContactsEditorComponent> {
    dialogRef: MatDialogRef<ConfirmDeactivateDialogComponent>;

    constructor(public dialog: MatDialog) {}

    canDeactivate(component: ContactsEditorComponent) {
        if (component.warnOnClosing) {
            this.dialogRef = this.dialog.open(ConfirmDeactivateDialogComponent, {
                disableClose: false
            });
            return this.dialogRef.afterClosed();
        }
        return of(true);
    }
}
