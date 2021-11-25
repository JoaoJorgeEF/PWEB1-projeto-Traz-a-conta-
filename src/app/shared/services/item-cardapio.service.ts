import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ItemCardapio} from "../models/item-cardapio";

@Injectable({
  providedIn: 'root'
})
export class ItemCardapioService {

  URL_ITENSCARDAPIO = "http://localhost:3000/itens-cardapio";

  constructor(private httpClient: HttpClient) { }

  buscarPorId(id: number): Observable<ItemCardapio> {
    return this.httpClient.get<ItemCardapio>(`${this.URL_ITENSCARDAPIO}/${id}`);
  }

  listar(): Observable<Array<ItemCardapio>> {
    return this.httpClient.get<Array<ItemCardapio>>(this.URL_ITENSCARDAPIO);
  }

  inserir(itemCardapio: ItemCardapio): Observable<ItemCardapio> {
    return this.httpClient.post<ItemCardapio>(this.URL_ITENSCARDAPIO, itemCardapio);
  }

  editar(itemCardapio: ItemCardapio): Observable<ItemCardapio> {
    return this.httpClient.put<ItemCardapio>(`${this.URL_ITENSCARDAPIO}/${itemCardapio.id}`, itemCardapio);
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete<object>(`${this.URL_ITENSCARDAPIO}/${id}`);
  }
}
