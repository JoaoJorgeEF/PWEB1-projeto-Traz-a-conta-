import { Pedido } from "./pedido";

export class ItemCardapio {
  id: number;
  nome: string;
  tipo: string;
  descricao: string;
  preco: number;
  pedidos: Array<Pedido>;

  constructor(id: number = 0, nome: string = '', descricao: string= '', tipo: string = '', preco: number = 0){
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.tipo = tipo;
    this.preco = preco;
    this.pedidos = new Array<Pedido>();
  }
}
