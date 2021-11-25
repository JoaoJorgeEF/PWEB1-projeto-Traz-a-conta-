import { Component, OnInit } from '@angular/core';
import {ItemCardapio} from "../../shared/models/item-cardapio";
import {ItemCardapioService} from "../../shared/services/item-cardapio.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listagem-itens-cardapio',
  templateUrl: './listagem-itens-cardapio.component.html',
  styleUrls: ['./listagem-itens-cardapio.component.scss']
})
export class ListagemItensCardapioComponent implements OnInit {
  itensCardapio: Array<ItemCardapio>;

  constructor(private itemCardapioService: ItemCardapioService, private router: Router) {
    this.itensCardapio = new Array<ItemCardapio>();
  }

  ngOnInit(): void {
    this.itemCardapioService.listar().subscribe(
      itensCardapio => this.itensCardapio = itensCardapio
    )
  }

  editar(itemCardapio: ItemCardapio): void {
    this.router.navigate(['/cadastraritemcardapio', itemCardapio.id])
  }


  remover(id: number): void {
    this.itemCardapioService.remover(id).subscribe(
      resposta => {
        const index = this.itensCardapio.findIndex(i => i.id === id);
        if (index > -1){
          this.itensCardapio.splice(index, 1);
        }
      }
    )
  }
}
