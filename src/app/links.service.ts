import { Injectable } from '@angular/core';
import { Links } from './links';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  private links:Links[] = [
    {
      link: "Services",
      fragment: "services",
      routeLink: "/",
    },
    {
      link: "About us",
      fragment: "about-us",
      routeLink: "/",
    }, 
    {
      link: "Contact us",
      fragment: "contact-us",
      routeLink: "/",
    },
  ]

  getAllLinks(){
    return this.links;
  }
}
