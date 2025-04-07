import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES),
        canActivate: [authGuard]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '', component: MainComponent },
    { path: 'cardapio', component: CardapioComponent },
    { path: 'login', component: LoginComponent },

];
