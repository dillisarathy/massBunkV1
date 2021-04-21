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
			<td>${name}</td>
      <td>${emailAddress}</td>
      <td>${phonenumber}</td>
      <td>${subject}</td>
      <td>${message}</td></tr></table></div>`);
    this.sendMailService(formData).subscribe(data => {
      },
      error =>{
        console.log('oops', error)
      } 
    );
   }
  public sendMailToClient(name,emailAdress){
    let formData=new FormData();
    formData.append("from", "No-Reply <no-reply@massbunk.in>");
    formData.append("to",emailAdress);
    formData.append("replyTo","info@massbunk.in");
    formData.append("subject",`Thank you for your Interaction`);
    formData.append("message",`<html>
    <head>
      <style type="text/css">
        .responsive{
          width: 100%;
          height:100%;
        }
      </style>
    </head>
    <body>
      <header>
        <img src="https://product.massbunk.in/massbunk/head.jpg" class="responsive">
       
      </header>
  
      <section>
        <article>
          <h1>Gracias..!</h1>
          <p>Thank you contacting us.</p>
          <p>We will get back to you soon.</p>
        </article>
      </section>
  
      <footer>
       <img src="https://product.massbunk.in/massbunk/foot.jpg" class="responsive">
      </footer>
    </body>
  </html>`)
    this.sendMailService(formData).subscribe(data => {
    },
    error =>{
      console.log('oops', error)
    } 
    );
   }
  }
