import { Component, OnInit } from '@angular/core';
import {ItemCardapio} from "../../shared/models/item-cardapio";
import {ItemCardapioService} from "../../shared/services/item-cardapio.service";
import {Router} from "@angular/router";
//import {ItensCardapioFirestoreService} from "../../shared/services/itens-cardapio-firestore.service";
import firebase from "firebase/compat";
import Item = firebase.analytics.Item;
import { MensagemService } from 'src/app/shared/services/mensagem.service';

@Component({
  selector: 'app-listagem-itens-cardapio',
  templateUrl: './listagem-itens-cardapio.component.html',
  styleUrls: ['./listagem-itens-cardapio.component.scss']
})
export class ListagemItensCardapioComponent implements OnInit {
  itensCardapio: Array<ItemCardapio>;

  constructor(private itemCardapioService: ItemCardapioService, private router: Router, private mensagemService: MensagemService) {
    this.itensCardapio = new Array<ItemCardapio>();
  }

  ngOnInit(): void {
    this.itemCardapioService.listar().subscribe(
      itensCardapio => {this.itensCardapio = itensCardapio; console.log(itensCardapio)}
    )
  }

  editar(itemCardapio: ItemCardapio): void {
    this.router.navigate(['/cadastraritemcardapio', itemCardapio.id])
  }


  remover(itemCardapio: ItemCardapio): void {
    //if (itemCardapio.id != null) {
      this.itemCardapioService.remover(itemCardapio.id).subscribe(
        resposta => {
          this.mensagemService.success("Item removido com sucesso!");
          const index = this.itensCardapio.findIndex(i => i.id === itemCardapio.id);
          if (index > -1) {
            this.itensCardapio.splice(index, 1);
          }
        }
      )
    //}
  }
}
