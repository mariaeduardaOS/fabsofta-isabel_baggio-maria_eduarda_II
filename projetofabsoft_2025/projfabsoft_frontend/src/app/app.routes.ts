import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'home', component: HomeComponent },
    { path: 'receitas', component: ListaReceitaComponent },
    { path: 'receitas/:id', component: DetalheReceitaComponent },
    { path: 'minhas-receitas', component: MinhasReceitasComponent },
];
