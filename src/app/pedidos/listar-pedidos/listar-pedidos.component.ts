import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { ItemCardapio } from 'src/app/shared/models/item-cardapio';
import { Pedido } from 'src/app/shared/models/pedido';
import { MensagemService } from 'src/app/shared/services/mensagem.service';
import { PedidosService } from 'src/app/shared/services/pedidos.service';

@Component({
  selector: 'app-listar-pedidos',
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.scss']
})
export class ListarPedidosComponent implements OnInit {
  pedidos: Array<Pedido>;

  constructor(private pedidosService: PedidosService, private router: Router, private mensagemService: MensagemService) {
    this.pedidos = new Array<Pedido>();
  }

  ngOnInit(): void {
    this.pedidosService.listar().subscribe(
      pedidos => {
        this.pedidos = pedidos;
      }
    )
  }

  editar(pedido: Pedido): void {
    this.router.navigate(['/cadastrarpedidos', pedido.id]);
  }

  remover(pedido: Pedido): void {
    this.pedidosService.remover(pedido.id).subscribe(
      resposta => {
        this.mensagemService.success('Pedido removido com sucesso!');
        const index = this.pedidos.findIndex(i => i.id === pedido.id);
        if (index > -1) {
          this.pedidos.splice(index, 1);
        }
      }
    )
  }

  desativarEdicao(event: MatSlideToggleChange, pedido: Pedido): void {
    if(pedido.status) {
      pedido.status = false;
      this.pedidosService.inserir(pedido).subscribe();
    } else {
      pedido.status = true;
      this.pedidosService.inserir(pedido).subscribe();
    }
    console.log(pedido.status);

  }

}
