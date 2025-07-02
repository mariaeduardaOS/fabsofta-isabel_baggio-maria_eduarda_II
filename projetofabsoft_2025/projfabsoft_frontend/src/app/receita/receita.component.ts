import { Receita } from '../model/receita';
import { ReceitaService } from '../service/receita.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';


@Component({
  selector: 'app-receita',

  templateUrl: './receita.component.html',
 
})


export class ReceitaComponent implements OnInit {


    public listareceitas:Receita[] = [];

    @ViewChild('myModal') modalElement!: ElementRef;
    private modal!: bootstrap.Modal;

    private receitaSelecionada!: Receita;
    
    constructor(
      private receitaService:ReceitaService,
      private router:Router
    ){}

    ngOnInit(): void {
      this.receitaService.listar().subscribe(resposta => {
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
        this.receitaSelecionada = receita;
        this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
        this.modal.show();
    }

    fecharConfirmacao() {
      this.modal.hide();
    }


confirmarExclusao() {
    const id = this.receitaSelecionada.id;
    if (id === undefined) {
        console.error('Erro: receitaSelecionada.id está undefined.');
        return;
    }

    this.receitaService.excluir(id).subscribe(
        () => {
            this.fecharConfirmacao();
            this.receitaService.listar().subscribe(receitas => {
                this.listareceitas = receitas;
            });
        },
        error => {
            console.error('Erro ao excluir receita:', error);
        }
    );
}

    }

