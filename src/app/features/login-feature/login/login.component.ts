import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../../users.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  user: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  email: any;
  password: any;

  constructor(private userService: UsersService, private router: Router) { }

  login() {
    this.userService.getUsers().subscribe((users) => {
      const user = users.find(
        (u) => u.email === this.email && u.password === this.password
      );
      debugger;
      console.log(user);
      if (user) {
        this.router.navigate(['']);
      } else {
        alert("Credential used are wrong! Plaese try again.");
      }
    });
  }

}
