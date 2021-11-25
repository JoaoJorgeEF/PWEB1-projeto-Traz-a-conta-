export class ItemCardapio {
  id: number;
  nome: string;
  tipo: string;
  descricao: string;
  preco: number;

  constructor(id: number = 0, nome: string = '', tipo: string = '', descricao: string = '', preco: number = 0) {
    this.id = id;
    this.nome = nome;
    this.tipo = tipo;
    this.descricao = descricao;
    this.preco = preco;
  }
}
