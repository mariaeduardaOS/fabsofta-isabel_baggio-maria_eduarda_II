import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private nomeUsuario = '';
  private emailUsuario = '';

  setUsuario(nome: string, email: string) {
    this.nomeUsuario = nome;
    this.emailUsuario = email;
  }

  getNome() {
    return this.nomeUsuario;
  }

  getEmail() {
    return this.emailUsuario;
  }
}
