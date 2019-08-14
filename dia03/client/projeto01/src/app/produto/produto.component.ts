import { Produto } from './../model/produto';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto;
  produtoLista: Produto[]=[];
  produtoCollection: AngularFirestoreCollection<Produto>;

  constructor(private db: AngularFirestore) {
    this.produto = new Produto();
  }

  ngOnInit() {
    this.listar();
  }

  public listar(){
    this.produtoCollection = this.db.collection("produto");
    this.produtoCollection.valueChanges().subscribe(items => {
      this.produtoLista = items;
    })
  }

}
