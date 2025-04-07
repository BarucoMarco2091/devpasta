import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { LoginComponent } from './login/login.component';
import { MenuRestritoComponent } from './restrito/menu-restrito/menu-restrito.component';

export const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'cardapio', component: CardapioComponent},
    { path: 'login', component: LoginComponent},
    {path: 'login', redirectTo: '/restrito', pathMatch: 'full'}
];
