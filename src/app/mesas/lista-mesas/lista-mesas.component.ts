import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensagemService } from 'src/app/shared/services/mensagem.service';
import { Mesa } from '../../shared/models/mesa';
import { MesaService } from '../../shared/services/mesa.service';

@Component({
  selector: 'app-lista-mesas',
  templateUrl: './lista-mesas.component.html',
  styleUrls: ['./lista-mesas.component.scss']
})
export class ListaMesasComponent implements OnInit {
  mesas: Array<Mesa>;

  constructor(private mesaService: MesaService, private router: Router, private mensagemService: MensagemService) {
    this.mesas = new Array<Mesa>();
   }

  ngOnInit(): void {
    this.mesaService.listar().subscribe(
      mesas => this.mesas = mesas
    )
  }

  editar(mesa: Mesa): void {
    this.router.navigate(['/cadastrarmesas', mesa.id])
  }

  remover(mesa: Mesa): void {
    //if (itemCardapio.id != null) {
      this.mesaService.remover(mesa.id).subscribe(
        resposta => {
          this.mensagemService.success("Mesa removida com sucesso!");
          const index = this.mesas.findIndex(i => i.id === mesa.id);
          if (index > -1) {
            this.mesas.splice(index, 1);
          }
        }
      )
    //}
  }

}
