export class ItemCardapio {
  id?: string;
  nome?: string;
  tipo?: string;
  descricao?: string;
  preco?: number;

  constructor(id?: string, itemCardapio: ItemCardapio = {}) {
    this.id = id;
    this.nome = itemCardapio.nome;
    this.tipo = itemCardapio.tipo;
    this.descricao = itemCardapio.descricao;
    this.preco = itemCardapio.preco;
  }
}
