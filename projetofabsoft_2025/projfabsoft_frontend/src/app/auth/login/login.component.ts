import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [CommonModule, FormsModule]
})
  
export class LoginComponent {
  nome = '';
  email = '';

  constructor(private router: Router, private authService: AuthService) {}

  entrar() {
    if (this.nome && this.email) {
      this.authService.setUsuario(this.nome, this.email);
      this.router.navigate(['/home']);
    } else {
      alert('Preencha nome e email para continuar');
    }
  }
}
