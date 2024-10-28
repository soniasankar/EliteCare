import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Make sure the style file exists
})
export class HomeComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor() {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Contact Form Submitted:', this.contact);
      form.reset();
      alert('Thank you for your message!');
    }
  }
}
