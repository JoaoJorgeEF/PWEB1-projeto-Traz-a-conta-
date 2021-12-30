import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Mesa } from 'src/app/shared/models/mesa';
import { Usuario } from 'src/app/shared/models/usuario';
import { MensagemService } from 'src/app/shared/services/mensagem.service';
import { MesaService } from 'src/app/shared/services/mesa.service';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-cadastra-mesas',
  templateUrl: './cadastra-mesas.component.html',
  styleUrls: ['./cadastra-mesas.component.scss']
})
export class CadastraMesasComponent implements OnInit {
  mesa: Mesa;
  usuarios: Array<Usuario>;
  selectData: Usuario = new Usuario();
  usuariosNaLista: Array<Usuario> = new Array<Usuario>();

  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource<Usuario>();
  mostrarColunas = ['id', 'nome', 'acoes'];

  constructor(private mesaService: MesaService,
                private usuarioService: UsuariosService,
                private route: ActivatedRoute,
                private router: Router,
                private mensagemService: MensagemService) {
    this.mesa = new Mesa();
    this.usuarios = new Array<Usuario>();
  }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.has('id')){
      this.mesaService.buscarPorId(this.route.snapshot.params['id']).subscribe(
        mesa => {
          this.mesa = mesa;
          this.dataSource = new MatTableDataSource(this.mesa.usuarios);
          this.usuariosNaLista = this.mesa.usuarios;
        }
      )
    }
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  inserirNaLista(): void {
    this.usuariosNaLista.push(this.selectData);
    this.mesa.usuarios = this.usuariosNaLista;
    this.dataSource.data = this.usuariosNaLista;
  }

  inserir(mesa: Mesa): void{
    this.mesaService.inserir(mesa).subscribe(
      mesa => {
        this.mensagemService.success("Mesa salva com sucesso!")
        this.router.navigate(['/listarmesas']);
      }
     );
  }

  valorSelecionado(event: MatSelectChange){
    this.selectData = event.value;
  }

  apagarDaLista(id: number){
    const index = this.usuariosNaLista.findIndex(i => i.id === id);
    if (index > -1) {
      this.usuariosNaLista.splice(index, 1);
      this.mesa.usuarios.splice(index, 1);
      this.dataSource.data = this.usuariosNaLista;
    }
  }
}
