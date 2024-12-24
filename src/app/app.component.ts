import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
      CommonModule, 
      RouterOutlet,
      RouterModule
  ],
  template: `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <router-outlet/>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Home Page';
}
