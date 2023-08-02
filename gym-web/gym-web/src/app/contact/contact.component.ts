import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject : new FormControl(''),
    message: new FormControl('')

  });

  constructor() { }

  ngOnInit() {
  }


  message:string = '';
sendEmail(contactFormValue:any){
  console.log(contactFormValue)
  emailjs.send("service_s8kph9a","template_nmofxzh",{
    from_name: contactFormValue.name,
    from_email: contactFormValue.email,
    subject: contactFormValue.subject,
    message: contactFormValue.message,
    }, 'jxUUeVtu1nzo2abn5')
    .then(
      (result) => {
        this.message = 'Thank For Contacting'
        console.log(result)
      },
      (error) => {
        this.message = 'Server Error'
      }
    )
  };

}
