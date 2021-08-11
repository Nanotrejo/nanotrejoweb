import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../../../service/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  dataForm = {
    name: '',
    lastname: '',
    email: '',
    subject:'',
    message: '',
  };
  constructor(private emailService: EmailService) {}

  ngOnInit(): void {}

  send(form: NgForm) {
    if(form.valid){
      this.emailService.onSubmit(form); 
    }
  }
}
