import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
