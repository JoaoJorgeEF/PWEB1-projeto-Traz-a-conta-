import { Component, OnInit } from '@angular/core';
import {ItemCardapio} from "../../shared/models/item-cardapio";
import {ItemCardapioService} from "../../shared/services/item-cardapio.service";
import {ActivatedRoute, Router} from "@angular/router";
import { MensagemService } from 'src/app/shared/services/mensagem.service';
// import {ItensCardapioFirestoreService} from "../../shared/services/itens-cardapio-firestore.service";

@Component({
  selector: 'app-cadastro-itens-cardapio',
  templateUrl: './cadastro-itens-cardapio.component.html',
  styleUrls: ['./cadastro-itens-cardapio.component.scss']
})
export class CadastroItensCardapioComponent implements OnInit {

  itemCardapio: ItemCardapio;

  constructor(private itemCardapioService: ItemCardapioService, private route: ActivatedRoute, private router: Router, private mensagemService: MensagemService) {
    this.itemCardapio = new ItemCardapio();
  }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.has('id')){
      this.itemCardapioService.buscarPorId(this.route.snapshot.params['id']).subscribe(
        itemCardapio => this.itemCardapio = itemCardapio
      )
    }
  }

  inserir(itemCardapio: ItemCardapio): void {
    this.itemCardapioService.inserir(itemCardapio).subscribe(
          itemCardapio =>{
            this.mensagemService.success('Item salvo com sucesso!');
            this.router.navigate(['/listaritenscardapio']);
          }
         );
  }

}
