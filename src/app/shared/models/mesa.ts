export class Mesa {
  id: number;
  usuarios: string;

  constructor(id: number = 0,numUsuarios = '' ){
    this.id = id;
    this.usuarios = numUsuarios;
  }
}
