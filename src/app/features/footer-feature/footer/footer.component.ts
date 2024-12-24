import { Component, inject } from '@angular/core';
import { FooterElementsComponent } from '../footer-elements/footer-elements.component';
import { CardService } from '../../../card.service';
import { CommonModule } from '@angular/common';
import { FooterLinksComponent } from '../footer-links/footer-links.component';
import { LinksService } from '../../../links.service';

@Component({
  selector: 'app-footer',
  standalone: true, 
  imports: [CommonModule, FooterElementsComponent, FooterLinksComponent],  
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  cardService = inject(CardService);
  textList = this.cardService.getAllCards();

  
  linkService = inject(LinksService);
  linkList = this.linkService.getAllLinks();

  constructor(){
    console.log(this.linkList)
  }
}
