import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';



@Component({
  selector: 'app-contact',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
   
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };
  constructor(private http: HttpClient) { }

 submitForm() {
  this.http.post('https://portfolio-u4jc.onrender.com/api/contact/', this.contact).subscribe({
    next: () =>  {
      alert('Message sent successfully!');
      this.contact = {
        name: '',
        email: '',
        message: ''
      };
      },
    error: () => alert('Error sending message.')
  });
}
}
