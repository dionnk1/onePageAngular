import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-links',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer-links.component.html',
  styleUrl: './footer-links.component.scss'
})
export class FooterLinksComponent {

  @Input() link!: any; 
  @Input() fragment!: string;
  @Input() routeLink!: string;
  hasProperty = true;

}
