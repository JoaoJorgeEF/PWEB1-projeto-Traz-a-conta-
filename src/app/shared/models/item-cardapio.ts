export class ItemCardapio {
  //id?: number | string;
  id: number;
  nome: string;
  tipo: string;
  descricao: string;
  preco: number;

  // constructor(id: number, itemCardapio: ItemCardapio = {}) {
  //   this.id = id;
  //   this.nome = itemCardapio.nome;
  //   this.tipo = itemCardapio.tipo;
  //   this.descricao = itemCardapio.descricao;
  //   this.preco = itemCardapio.preco;
  // }

  constructor(id: number = 0, nome: string = '', descricao: string= '', tipo: string = '', preco: number = 0){
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.tipo = tipo;
    this.preco = preco;
  }
}
