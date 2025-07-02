import { Component } from '@angular/core';
import { Receita } from '../model/receita';
import { ReceitaService } from '../service/receita.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  termoBusca: string = '';
  receitasEncontradas: Receita[] = [];

  constructor(private receitaService: ReceitaService, private router: Router) {}

  buscar() {
    const termo = this.termoBusca.toLowerCase().trim();

    if (termo) {
      this.receitaService.listar().subscribe(receitas => {
        this.receitasEncontradas = receitas.filter(r =>
          r.ingredientes.some(ing => ing.toLowerCase().includes(termo))
        );
      });
    } else {
      this.receitasEncontradas = [];
    }
  }

  visualizarDetalhes(receitaId: number) {
    this.router.navigate(['receitas', receitaId]);
  }
}
