import { ItemCardapio } from "./item-cardapio";
import { Mesa } from "./mesa";
import { Usuario } from "./usuario";

export class Pedido {
  id: number;
  usuario: Usuario;
  mesa: Mesa;
  itensCardapio: Array<ItemCardapio>
  quantidade: number;
  status: boolean; // true = aberto | false = fechado

  constructor(id: number = 0, usuario: Usuario = new Usuario(), mesa: Mesa = new Mesa(), quantidade: number = 0, status = true) {
    this.id = id;
    this.usuario = usuario;
    this.mesa = mesa;
    this.itensCardapio = new Array<ItemCardapio>();
    this.quantidade = quantidade;
    this.status = status;
  }
}
