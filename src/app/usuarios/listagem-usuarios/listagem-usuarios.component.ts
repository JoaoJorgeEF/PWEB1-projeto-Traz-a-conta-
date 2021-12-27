import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/models/usuario';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.scss']
})
export class ListagemUsuariosComponent implements OnInit {
  usuarios: Array<Usuario>;

  constructor(private usuariosService: UsuariosService, private router: Router) {
    this.usuarios = new Array<Usuario>();
  }

  ngOnInit(): void {
    this.usuariosService.listar().subscribe(
      usuarios => this.usuarios = usuarios
    )
  }

  editar(usuario: Usuario): void {
    this.router.navigate(['/cadastrarusuarios', usuario.id]);
  }

  remover(usuario: Usuario): void {
    this.usuariosService.remover(usuario.id).subscribe(
      resposta => {
        const index = this.usuarios.findIndex(i => i.id === usuario.id);
        if (index > -1) {
          this.usuarios.splice(index, 1);
        }
      }
    )
  }

}
