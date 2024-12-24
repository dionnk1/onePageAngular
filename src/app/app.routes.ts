import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RegisterComponent } from './features/signup-feature/register/register.component';
import { LoginComponent } from './features/login-feature/login/login.component';
export const routes: Routes = [
    {
        path: "",
        component: HomeComponentComponent,
    },
    {
        path: "signup",
        component: RegisterComponent,
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
