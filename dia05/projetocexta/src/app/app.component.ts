import { LoginService } from './service/login.service';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  //variáveld de contagem da cesta
  countCesta: number = 0;

  constructor(private service: ProdutoService, private servLogin: LoginService){

  }

  //inicializa já mostrando a quantidade de produtos na cesta
  ngOnInit(): void{
    this.service.quantidade().subscribe(res => {
      this.countCesta = res;
    })
  }

  //método de logout
  sair(){
    this.servLogin.logout();
  }
  
}
