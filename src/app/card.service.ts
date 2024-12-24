import { Injectable } from '@angular/core';
import { CardInterface } from './card-interface';

@Injectable({
  providedIn: 'root'  // This ensures the service is available app-wide
})
export class CardService {
  private cards: CardInterface[] = [
    { 
      cardTitle: 'Solar Panel Installation', 
      cardDesc: "Expert installation of high-efficiency solar panels for residential, commercial, and industrial properties." },
    { 
      cardTitle: 'Solar System Maintenance', 
      cardDesc: 'Regular cleaning, inspection, and servicing to ensure optimal performance and longevity of solar systems.' 
    },
    { 
      cardTitle: "Solar System Design and Consultation", 
      cardDesc: 'Customized solar energy system designs tailored to individual energy needs and site conditions.' 
    },
    { 
      cardTitle: 'Energy Storage Solutions', 
      cardDesc: 'Installation and management of battery storage systems to store excess energy for later use.' 
    },
    { 
      cardTitle: 'Solar Panel Repair and Replacement', 
      cardDesc: 'Diagnosing and repairing issues with solar panels and replacing damaged components to keep systems running efficiently.' 
    }
  ];

  getAllCards(): CardInterface[] {
    return this.cards;
  }
}
