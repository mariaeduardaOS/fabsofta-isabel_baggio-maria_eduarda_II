import { Component,ElementRef, ViewChild } from '@angular/core';
import { usuario } from '../model/usuario';
import { usuarioService } from '../service/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-usuario',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
  providers: [usuarioService, Router]
})

export class usuarioComponent {

    public listausuarios:usuario[] = [];

    @ViewChild('myModal') modalElement!: ElementRef;
    private modal!: bootstrap.Modal;

    private usuarioSelecionado!: usuario;
    
    constructor(
      private usuarioService:usuarioService,
      private router:Router
    ){}

    ngOnInit(): void {
      this.usuarioService.getusuarios().subscribe(resposta => {
          this.listausuarios = resposta;
      })
    }
    novo(){
      this.router.navigate(['usuarios/novo']);
    }
    alterar(usuario:usuario){
      this.router.navigate(['usuarios/alterar', usuario.id]);
    }

    abrirConfirmacao(usuario:usuario) {
        this.usuarioSelecionado = usuario;
        this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
        this.modal.show();
    }

    fecharConfirmacao() {
      this.modal.hide();
    }


    confirmarExclusao() {
        this.usuarioService.excluirusuario(this.usuarioSelecionado.id).subscribe(
            () => {
                this.fecharConfirmacao();
                this.usuarioService.getusuarios().subscribe(
                  usuarios => {
                    this.listausuarios = usuarios;
                  }
                );
            },
            error => {
                console.error('Erro ao excluir receita:', error);
            }
        );
    }


}
