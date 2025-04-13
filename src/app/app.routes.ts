import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MenuComponent } from './shared/menu/menu.component';
import { CreatingComponent } from './pages/creating/creating.component';
import { LoginComponent } from './pages/login/login.component';
import { MessageComponent } from './pages/message/message.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'creating', component: CreatingComponent },
    { path: 'message', component: MessageComponent },

];
