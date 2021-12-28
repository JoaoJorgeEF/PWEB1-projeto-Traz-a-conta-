import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  URL_PEDIDOS = "http://localhost:8080/pedidos";

  constructor(private httpClient: HttpClient) { }

  buscarPorId(id: number): Observable<Pedido> {
    return this.httpClient.get<Pedido>(`${this.URL_PEDIDOS}/${id}`);
  }

  listar(): Observable<Array<Pedido>> {
    return this.httpClient.get<Array<Pedido>>(this.URL_PEDIDOS);
  }

  inserir(pedido: Pedido): Observable<Pedido> {
    return this.httpClient.post<Pedido>(this.URL_PEDIDOS, pedido);
  }

  editar(pedido: Pedido): Observable<Pedido> {
    return this.httpClient.put<Pedido>(`${this.URL_PEDIDOS}`, pedido);
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete<object>(`${this.URL_PEDIDOS}/${id}`);
  }
}
