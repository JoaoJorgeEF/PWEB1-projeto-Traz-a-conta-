import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mesa } from '../models/mesa';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  URL_MESAS = "http://localhost:8080/mesas";

  constructor(private httpClient: HttpClient) { }

  buscarPorId(id: number): Observable<Mesa> {
    return this.httpClient.get<Mesa>(`${this.URL_MESAS}/${id}`);
  }

  listar(): Observable<Array<Mesa>> {
    return this.httpClient.get<Array<Mesa>>(this.URL_MESAS);
  }

  inserir(mesa: Mesa): Observable<Mesa> {
    return this.httpClient.post<Mesa>(this.URL_MESAS, mesa);
  }

  editar(mesa: Mesa): Observable<Mesa> {
    return this.httpClient.put<Mesa>(`${this.URL_MESAS}`, mesa);
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete<object>(`${this.URL_MESAS}/${id}`);
  }
}
