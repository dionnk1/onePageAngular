import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LinksService } from '../../../links.service';
import { FooterLinksComponent } from '../../footer-feature/footer-links/footer-links.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, FooterLinksComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  title = 'Navbar';

  linkService = inject(LinksService);
  linkList = this.linkService.getAllLinks();
}
