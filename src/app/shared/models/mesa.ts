export class Mesa {
  id: number;
  usuarios: Array<string> //TODO implementar a classe usuarios

  constructor(id: number = 0){
    this.id = id;
    this.usuarios = new Array<string>();
  }
}
