import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Receita } from '../model/receita';
import { ReceitaService } from '../service/receita.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form-receita',
  templateUrl: './form-receita.component.html',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  providers: [ReceitaService, Router]
})
export class FormreceitaComponent {
  ingredientesTexto: string = "";

  receita: Receita = {
    titulo: '',
    descricao: '',
    ingredientes: [],
    modoPreparo: '',
    usuario: '',
    emailCriador: ''
  };

  constructor(
    private receitaService: ReceitaService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {
    const id = this.activeRouter.snapshot.paramMap.get('id');
    if (id) {
      this.receitaService.buscarPorId(Number(id)).subscribe(receita => {
        this.receita = receita;
      });
    }
  }

  salvar() {
    this.receitaService.adicionar(this.receita)
      .subscribe(res => {
        this.router.navigate(['minhas-receitas']); 
      });
  }
}
