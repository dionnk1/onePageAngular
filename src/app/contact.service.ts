import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [
    {
      infoType: "Location",
      actualInfo: "Rr. Beqir Kastrati, 7, Banesa e pare, Prishtine, 10000",
    },
    {
      infoType: "Phone",
      actualInfo: "383 049 123 456",
    },
    {
      infoType: "Email",
      actualInfo: "dk6@beriflapp.me",
    },
    {
      infoType: "Website",
      actualInfo: "www.solpan.com",
    },
  ];
  getAllContacts(){
    return this.contacts;
  }

}
