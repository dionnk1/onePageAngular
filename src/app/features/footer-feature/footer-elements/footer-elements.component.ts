import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-footer-elements',
  imports: [CommonModule],
  templateUrl: './footer-elements.component.html',
  styleUrl: './footer-elements.component.scss'
})
export class FooterElementsComponent {
    @Input() text!: any;

}
