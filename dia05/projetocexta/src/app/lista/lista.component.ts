import { ProdutoService } from './../service/produto.service';
import { Produto } from 'src/app/model/produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  produto: Produto;
  produtoLista: Produto[]=[];

  constructor( private service: ProdutoService) {
    this.produto = new Produto();
  }

  ngOnInit() {
    this.listarProduto();
  }

  //lista todos os produtos do site
  public listarProduto(){
    this.produtoLista = this.service.listagemProdutos();
  }

  //
  public addCesta(produto: Produto){
    this.service.adicionarCesta(produto);
    //alert("Produto adicionado" + JSON.stringify(produto));
    console.log("Produto adicionado: " + produto);
    console.log("Cesta: ", this.service.listaCesta);
    console.log("Contagem: ", this.service.quantidade);
  }

}
