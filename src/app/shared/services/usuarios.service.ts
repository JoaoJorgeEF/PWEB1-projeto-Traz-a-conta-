import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  URL_USUARIOS = "http://localhost:8080/usuarios";

  constructor(private httpClient: HttpClient) { }

  buscarPorId(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.URL_USUARIOS}/${id}`);
  }

  listar(): Observable<Array<Usuario>> {
    return this.httpClient.get<Array<Usuario>>(this.URL_USUARIOS);
  }

  inserir(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.URL_USUARIOS, usuario);
  }

  editar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.URL_USUARIOS}`, usuario);
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete<object>(`${this.URL_USUARIOS}/${id}`);
  }
}
