import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../service/receita.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-minhas-receitas',
  templateUrl: './minhas-receitas.component.html',
})
export class MinhasReceitasComponent implements OnInit {
  minhasReceitas: any[] = [];

  constructor(private receitaService: ReceitaService, private authService: AuthService) {}

  ngOnInit() {
    this.receitaService.listar().subscribe(receitas => {
      const meuEmail = this.authService.getEmail();
      this.minhasReceitas = receitas.filter(r => r.emailCriador === meuEmail);
    });
  }
}
