// import { Injectable } from '@angular/core';
// import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule} from "@angular/fire/compat/firestore";
// import {ItemCardapio} from "../models/item-cardapio";
// import {from, map, Observable} from "rxjs";

// @Injectable({
//   providedIn: 'root'
// })
// export class ItensCardapioFirestoreService {

//   colecaoItensCardapio: AngularFirestoreCollection<ItemCardapio>;
//   NOME_COLECAO = 'itens-cardapio';

//   constructor(private afs: AngularFirestore) {
//     this.colecaoItensCardapio = afs.collection(this.NOME_COLECAO);
//   }

//   listar(): Observable<ItemCardapio[]>{
//     return this.colecaoItensCardapio.valueChanges({idField: 'id'});
//   }

//   inserir(itemCardapio : ItemCardapio): Observable<ItemCardapio> {
//     delete itemCardapio.id;
//     return from(this.colecaoItensCardapio.add(Object.assign({}, itemCardapio)));
//   }

//   editar(itemCardapio : ItemCardapio): Observable<void> {
//     let id = itemCardapio.id
//     delete itemCardapio.id;
//     return from(this.colecaoItensCardapio.doc(itemCardapio.id).update(Object.assign({}, itemCardapio)));
//   }

//   remover(id: string): Observable<void>{
//     return from(this.colecaoItensCardapio.doc(id).delete());
//   }

//   buscarPorId(id: string): Observable<ItemCardapio> {
//     // como o objeto retornado pelo get é um DocumentData, e não um usuário, transformamos a partir de um pipe e mapeamos de um document
//     //  para o tipo usuário
//     return this.colecaoItensCardapio.doc(id).get().pipe(map(document => new ItemCardapio(document.id, document.data())));
//   }


// }
