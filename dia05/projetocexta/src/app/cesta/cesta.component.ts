import { ProdutoService } from './../service/produto.service';
import { Produto } from 'src/app/model/produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {

  produtosCesta: Produto[] = [];
  total: number;

  constructor(private service: ProdutoService) {

  }

  ngOnInit() {
    this.listagemCesta();
  }

  //método para listar todos os produtos da cesta
  public listagemCesta(){
    this.produtosCesta = this.service.listaCesta();
    this.totalProdutos();
  }

  //metodo para remover produtos da cesta atraves do index
  public remover(index: number){
    this.service.removerProduto(index);
    console.log("Listagem", this.listagemCesta);
    //alert(this.produtosCesta.length);
    if(this.produtosCesta.length == 0){ //se a cesta esta vazia = 0
      this.total = 0;
    }
    this.totalProdutos(); //senão, calcula
  }

  public totalProdutos(){
    this.total = this.produtosCesta.map( item => item.preco).reduce((a, b) => {
      return a+b
    });
  }

}
