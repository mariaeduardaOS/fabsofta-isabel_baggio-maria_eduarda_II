import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receita } from '../model/receita';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  private apiURL = 'http://localhost:8080/api/receitas'; // Ajuste para o endpoint correto

  constructor(private http: HttpClient) {}

  listar(): Observable<Receita[]> {
    return this.http.get<Receita[]>(this.apiURL);
  }

  buscarPorId(id: number): Observable<Receita> {
    return this.http.get<Receita>(`${this.apiURL}/${id}`);
  }

  adicionar(receita: Receita): Observable<Receita> {
    return this.http.post<Receita>(this.apiURL, receita);
  }

  atualizar(id: number, receita: Receita): Observable<Receita> {
    return this.http.put<Receita>(`${this.apiURL}/${id}`, receita);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
