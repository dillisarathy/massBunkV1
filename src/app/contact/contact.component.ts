import { MailService } from './../services/mail.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      name: new FormControl(''),
      emailAddress: new FormControl(''),
      phoneNo: new FormControl(''),
      subject: new FormControl(''),
      message: new FormControl('')
    });
  }

  /* submitForm()
  {
    this.mailService.sendMailToMassbunk(this.userForm.name,this.userForm.);
    this.mailService.sendMailToClient();
  } */


}
