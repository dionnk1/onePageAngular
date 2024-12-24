import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable <any[]> {
      return this.http.get('../app/assets/users.xml', {responseType: 'text'}).pipe(
        map((xml) => {
          return this.parseXml(xml);
    })) 
  }

  private parseXml(xml: string): any[] {
    const parser = new DOMParser(); // Parses XML strings into a DOM document
    const xmlDoc = parser.parseFromString(xml, 'application/xml'); // Creates a DOM tree from the XML string
    const users = Array.from(xmlDoc.getElementsByTagName('object')).map(
      (object) => ({
        id: object.getElementsByTagName('id')[0]?.textContent,
        name: object.getElementsByTagName('name')[0]?.textContent,
        email: object.getElementsByTagName('email')[0]?.textContent,
        password: object.getElementsByTagName('password')[0]?.textContent,
      })
    );
    return users; // Returns an array of user objects
  }
  
}
