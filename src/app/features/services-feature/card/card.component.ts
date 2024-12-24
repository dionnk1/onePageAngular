import { Component, Input } from '@angular/core';
import { CardInterface } from '../../../card-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule,],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
    @Input() card: CardInterface | undefined;
}
