import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { FormreceitaComponent } from './form-receita/form-receita.component';
import { HomeComponent } from './home/home.component';
import { MinhasReceitasComponent } from './minhas-receitas/minhas-receitas.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nova-receita', component: FormreceitaComponent },
  { path: 'minhas-receitas', component: MinhasReceitasComponent },
  { path: '**', redirectTo: '' }
];