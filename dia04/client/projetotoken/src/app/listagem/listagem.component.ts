import { UsuarioService } from './../service/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  usuario: Usuario;
  usuarioLista: Usuario[]=[];
  status: boolean = false;

  constructor( private service: UsuarioService) {

  }

  ngOnInit() {
    this.listar();
  }

  //MÉTODO PARA LISTAR USUÁRIOS
  public listar(){
    this.service.lisAuthentication().subscribe( res => {
      this.usuarioLista = res;
    });
  }

  //MÉTODO DO BOTÃO DE CONFERIR SE ESTÁ LOGADO
  public estaLogado(){
    this.status = this.service.isLogado();
  }

  //MÉTODO DO BOTÃO DE LOGGOUT
  public logout(){
    this.service.logoff();
  }

}
