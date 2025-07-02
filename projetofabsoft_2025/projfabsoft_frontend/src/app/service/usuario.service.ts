import { Injectable } from '@angular/core';
import { usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class usuarioService {
  apiBase = (window as any).env.apiUrl;
  apiURL = (this.apiBase !== null ? this.apiBase : 'http://localhost:8080/api/v1/usuarios') + "/usuarios";

  constructor(private http:HttpClient) { }

  getusuarios(){
     return this.http.get<usuario[]>(this.apiURL);
  }
  saveusuario(usuario:usuario){
    if(usuario.id){
      return this.http.put(this.apiURL + '/' + usuario.id, usuario);
    }
    return this.http.post(this.apiURL,usuario);
  }
  getusuarioById(id: any) {
    return this.http.get<usuario>(this.apiURL + '/' + id);
  }
  excluirusuario(id: any){
    return this.http.delete<usuario>(this.apiURL + '/' + id);
  }
}
