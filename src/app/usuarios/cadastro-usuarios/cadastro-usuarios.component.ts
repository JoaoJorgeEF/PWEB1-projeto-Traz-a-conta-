import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/models/usuario';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit {

  usuario: Usuario;

  constructor(private usuarioService: UsuariosService,private route: ActivatedRoute, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.has('id')){
      this.usuarioService.buscarPorId(this.route.snapshot.params['id']).subscribe(
        usuario => this.usuario = usuario
      )
    }
  }

  inserir(usuario: Usuario): void{
    this.usuarioService.inserir(usuario).subscribe(
      usuario => this.router.navigate(['/listarusuarios'])
    );
  }

}
