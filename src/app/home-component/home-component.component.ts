import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../features/navbar-feature/navbar/navbar.component';
import { CarouselComponent } from '../features/carousel-feature/carousel/carousel.component';
import { BreakComponent } from '../shared/break/break.component';
import { AboutComponent } from '../features/about-feature/about/about.component';
import { CardComponent } from '../features/services-feature/card/card.component';
import { FooterComponent } from '../features/footer-feature/footer/footer.component';
import { ContactComponent } from '../features/contact-feature/contact/contact.component';
import { ContactInfoComponent } from '../features/contact-feature/contact-info/contact-info.component';
import { CardService } from '../card.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-component',
  imports: [
    NavbarComponent,
    CarouselComponent,
    BreakComponent,
    AboutComponent,
    CardComponent,
    FooterComponent,
    NavbarComponent,
    ContactComponent,
    ContactInfoComponent,
    CommonModule
  ],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent {
  cardService: CardService = inject(CardService);
  cardList = this.cardService.getAllCards();
}
