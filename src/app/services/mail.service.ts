import { baseURL } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private httpclient: HttpClient) { }

  public sendMailService(formData:FormData) {
    formData.append("url", "mailService");
    return this.httpclient.post(`${baseURL}response.php`,formData)
    .pipe(
      map((data: any) => data.content )
    );
  }

  public sendMailToMassbunk(name,emailAddress,phonenumber,subject,message){
    let formData=new FormData();
    formData.append("from", "No-Reply <no-reply@massbunk.in>");
    formData.append("to","info@massbunk.in");
    formData.append("replyTo","info@massbunk.in");
    formData.append("subject",`${subject}`);
    formData.append("message",`<div>
		<table><tr><th>Name</th><th>Email Id</th>
    <th>Phone Number</th><th>Subject</th>
    <th>message</th></tr><tr>
			<td>"${name}"</td>
      <td>"${emailAddress}"</td>
      <td>"${phonenumber}"</td>
      <td>"${subject}"</td>
      <td>"${message}"</td></tr></table></div>`);
    this.sendMailService(formData);
   }
  public sendMailToClient(name,emailAdress){
    let formData=new FormData();
    formData.append("from", "No-Reply <no-reply@massbunk.in>");
    formData.append("to","info@massbunk.in");
    formData.append("replyTo",emailAdress);
    formData.append("subject",`Thank you for your Interaction`);
    formData.append("message",`
    <div><h1> Hi ${name},</h1></div>
    <div>
    <img src="https://about.dinerqr.com/pop-up.png" alt="no img" style="position:relative;left:10%;height=400px">
    </div>`);
    this.sendMailService(formData);
   }
  }
