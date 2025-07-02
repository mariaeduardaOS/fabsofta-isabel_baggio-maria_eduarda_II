import { Component } from '@angular/core';
import { receita } from '../model/receita';
import { receitaService } from '../service/receita.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-form-receita',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-receita.component.html',
  styleUrl: './form-receita.component.css',
  providers: [receitaService, Router]
})
export class FormreceitaComponent {
    receita:receita = new receita();

    constructor(
      private receitaService: receitaService,
      private router: Router,
      private activeRouter: ActivatedRoute
    ) {
        const id = this.activeRouter.snapshot.paramMap.get('id');
        
        if (id) {
          this.receitaService.getreceitaById(id).subscribe(receita => {
            this.receita = receita;
        });
      }
    }

    salvar(){
      this.receitaService.savereceita(this.receita)
          .subscribe( res => {
            this.router.navigate(['receitas']);
          });
    }

}
