import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../../../core/service/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Contact } from '../../../core/interface/contact';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  dataForm: Contact = {};
  sendValidate: Boolean = false;

  constructor(
    private emailService: EmailService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void { }

  sendEmail(form: NgForm): void {
    if (form.valid) {
      this.sendValidate = true;
      this.emailService
        .onSubmit(form.value)
        .pipe(
          catchError((error) => {
            return of([]);
          })
        )
        .subscribe((res: any) => {
          if (res?.ok) {
            this.sendValidate = false;
            this.snackbar.open('Enviado', '🍫', {
              duration: 3500,
              verticalPosition: 'top',
              horizontalPosition: 'end',
              panelClass: ['snackbar-success'],
            });

            form.reset();
            this.dataForm = {};
          } else {
            this.sendValidate = false;
            this.snackbar.open('Error', 'Inténtelo de nuevo', {
              duration: 3500,
              verticalPosition: 'top',
              horizontalPosition: 'end',
              panelClass: ['snackbar-error'],
            });
          }
        });
    }
  }
}
