import { Component, Input } from '@angular/core';
import {Contact} from '../../../contact';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-info',
  imports: [CommonModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {
  @Input() contact: Contact | undefined;
}
