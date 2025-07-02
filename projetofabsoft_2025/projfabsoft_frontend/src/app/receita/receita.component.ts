import { Component,ElementRef, ViewChild } from '@angular/core';
import { Receita } from '../model/receita';
import { ReceitaService } from '../service/receita.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-receita',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './receita.component.html',
  styleUrl: './receita.component.css',
  providers: [ReceitaService, Router]
})
export class ReceitaComponent {

    public listareceitas:Receita[] = [];

    @ViewChild('myModal') modalElement!: ElementRef;
    private modal!: bootstrap.Modal;

    private receitaSelecionado!: Receita;
    
    constructor(
      private receitaService:ReceitaService,
      private router:Router
    ){}

    ngOnInit(): void {
      this.receitaService.getreceitas().subscribe(resposta => {
          this.listareceitas = resposta;
      })
    }
    novo(){
      this.router.navigate(['receitas/novo']);
    }
    alterar(receita:Receita){
      this.router.navigate(['receitas/alterar', receita.id]);
    }

    abrirConfirmacao(receita:Receita) {
        this.receitaSelecionado = receita;
        this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
        this.modal.show();
    }

    fecharConfirmacao() {
      this.modal.hide();
    }


    confirmarExclusao() {
        this.receitaService.excluirreceita(this.receitaSelecionado.id).subscribe(
            () => {
                this.fecharConfirmacao();
                this.receitaService.getreceitas().subscribe(
                  receitas => {
                    this.listareceitas = receitas;
                  }
                );
            },
            error => {
                console.error('Erro ao excluir receita:', error);
            }
        );
    }


}
