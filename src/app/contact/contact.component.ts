import { MailService } from './../services/mail.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  userForm: FormGroup;

  constructor(public mailService:MailService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('',Validators.required),
      emailAddress: new FormControl('',Validators.required),
      phoneNo: new FormControl('',Validators.required),
      subject: new FormControl('',Validators.required),
      message: new FormControl('',Validators.required)
    });
    window.scrollTo(0, 0);
  }

  submitForm()
  {
    this.mailService.sendMailToMassbunk(this.userForm.get('name').value,this.userForm.get('emailAddress').value,this.userForm.get('phoneNo').value,this.userForm.get('subject').value,this.userForm.get('message').value);
    this.mailService.sendMailToClient(this.userForm.get('name').value,this.userForm.get('emailAddress').value);
  }
}
