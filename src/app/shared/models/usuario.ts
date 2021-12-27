export class Usuario{
  id: number;
  nome: string;

  constructor(id: number = 0, nome: string = ''){
    this.id = id;
    this.nome = nome;
  }
}
