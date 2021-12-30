import { Usuario } from "./usuario";

export class Mesa {
  id: number;
  usuarios: Array<Usuario>;

  constructor(id: number = 0){
    this.id = id;
    this.usuarios = new Array<Usuario>();
  }
}
