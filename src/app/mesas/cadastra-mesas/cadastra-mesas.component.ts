import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Mesa } from 'src/app/shared/models/mesa';
import { MensagemService } from 'src/app/shared/services/mensagem.service';
import { MesaService } from 'src/app/shared/services/mesa.service';

@Component({
  selector: 'app-cadastra-mesas',
  templateUrl: './cadastra-mesas.component.html',
  styleUrls: ['./cadastra-mesas.component.scss']
})
export class CadastraMesasComponent implements OnInit {
  mesa: Mesa;

  constructor(private mesaService: MesaService, private route: ActivatedRoute, private router: Router, private mensagemService: MensagemService) {
    this.mesa = new Mesa();
  }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.has('id')){
      this.mesaService.buscarPorId(this.route.snapshot.params['id']).subscribe(
        mesa => this.mesa = mesa
      )
    }
  }

//  inserirNaLista(usuario: string): void {
//    this.mesa.usuarios.push(usuario);
//    this.usuario = '';
//    this.dataSource = new MatTableDataSource(this.mesa.usuarios);
//  }

  inserir(mesa: Mesa): void{
    this.mesaService.inserir(mesa).subscribe(
      mesa => {
        this.mensagemService.success("Mesa salva com sucesso!")
        this.router.navigate(['/listarmesas']);
      }
     );
  }
}
