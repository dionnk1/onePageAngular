import { Component, inject, Input } from '@angular/core';
import { Contact } from '../../../contact';
import { ContactInfoComponent } from "../contact-info/contact-info.component";
import { ContactService } from '../../../contact.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ContactInfoComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  standalone: true,
})
export class ContactComponent {

    @Input() contact: Contact | undefined;
    
    contactList: Contact[] = [];
    contactService: ContactService = inject(ContactService);

    userMessage: FormGroup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('') 
    })

    // Doing the same thing as above but with FormBuilder
    private formBuilder = inject(FormBuilder);
    loginMessage = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      // Validateing for a required email and that it is a valid email.
      email: ['', Validators.required, Validators.email],
      // This Validators.maxLength(1000) validates the field to have a maximum of 1000 characters (not words).
      message: ['', Validators.maxLength(1000)]
    })
    
    

    onSubmit(): void {
      debugger;
      console.log(this.userMessage.value);
    }

    constructor(){
      this.contactList = this.contactService.getAllContacts();
    }

}