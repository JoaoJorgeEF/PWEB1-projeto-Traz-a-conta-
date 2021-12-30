import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemCardapio } from 'src/app/shared/models/item-cardapio';
import { Mesa } from 'src/app/shared/models/mesa';
import { Pedido } from 'src/app/shared/models/pedido';
import { Usuario } from 'src/app/shared/models/usuario';
import { ItemCardapioService } from 'src/app/shared/services/item-cardapio.service';
import { MensagemService } from 'src/app/shared/services/mensagem.service';
import { MesaService } from 'src/app/shared/services/mesa.service';
import { PedidosService } from 'src/app/shared/services/pedidos.service';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-cadastrar-pedidos',
  templateUrl: './cadastrar-pedidos.component.html',
  styleUrls: ['./cadastrar-pedidos.component.scss']
})
export class CadastrarPedidosComponent implements OnInit {
  pedido: Pedido;
  usuarios: Array<Usuario>;
  mesas: Array<Mesa>;
  itensCardapio: Array<ItemCardapio>;
  itensNaLista: Array<ItemCardapio>;
  selectData: ItemCardapio = new ItemCardapio();
  usuariosDaMesa: Array<Usuario>;
  mesaSelecionada: Mesa = new Mesa();

  dataSource: MatTableDataSource<ItemCardapio> = new MatTableDataSource<ItemCardapio>();
  mostrarColunas = ['id', 'nome', 'preco', 'acoes'];

  constructor(private pedidosService: PedidosService,
               private mesaService: MesaService,
               private usuarioService: UsuariosService,
               private itemCardapioService: ItemCardapioService,
               private route: ActivatedRoute,
               private router: Router,
               private mensagemService: MensagemService) {
    this.pedido = new Pedido();
    this.usuarios = new Array<Usuario>();
    this.usuariosDaMesa = new Array<Usuario>();
    this.mesas = new Array<Mesa>();
    this.itensCardapio = new Array<ItemCardapio>();
    this.itensNaLista = new Array<ItemCardapio>();
  }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.has('id')){
      this.pedidosService.buscarPorId(this.route.snapshot.params['id']).subscribe(
        pedido => {
          this.pedido = pedido;
          this.dataSource = new MatTableDataSource(this.pedido.itensCardapio);
          this.itensNaLista = this.pedido.itensCardapio;
        }
      )
    }
    this.mesaService.listar().subscribe(
      mesas => this.mesas = mesas
    )
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = usuarios
    )
    this.itemCardapioService.listar().subscribe(
      itensCardapio => {
        this.itensCardapio = itensCardapio
      }
    )
  }

  inserir(pedido: Pedido): void{
    this.pedido.itensCardapio.forEach(i => this.pedido.precoTotal += i.preco);
    pedido.itensCardapio = this.pedido.itensCardapio;
    this.pedidosService.inserir(pedido).subscribe(
      pedido => {
        this.mensagemService.success('Pedido salvo com sucesso!');
        this.router.navigate(['/listarpedidos'])
      }
    );
  }

  inserirNaLista(): void{
    this.itensNaLista.push(this.selectData);
    this.pedido.itensCardapio = this.itensNaLista;
    this.dataSource.data = this.itensNaLista;
  }

  apagarDaLista(id: number): void{
    const index = this.itensNaLista.findIndex(i => i.id === id);
    if (index > -1) {
      this.itensNaLista.splice(index, 1);
      this.pedido.itensCardapio.splice(index, 1);
      this.dataSource.data = this.itensNaLista;
    }
  }

  valorSelecionado(event: MatSelectChange){
    this.selectData = event.value;
  }

  usuarioSelecionado(event: MatSelectChange){
    this.mesaSelecionada = event.value;
  }
}
