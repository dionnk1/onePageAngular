import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { LoginComponent } from './app/features/login-feature/login/login.component';
import { HomeComponentComponent } from './app/home-component/home-component.component';
import { RegisterComponent } from './app/features/signup-feature/register/register.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponentComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: RegisterComponent },
    ],
    withInMemoryScrolling({ anchorScrolling: 'enabled'})
  ),
  ],
}).catch((err) => console.error(err));