import { Usuario } from './../model/usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;
  usuarioLista: Usuario[]=[];
  msg: string = '';

  //CONSTRUTOR PASSA A CONEXÃO DO SERVICE COM O BD
  constructor(private service: UsuarioService) {
    this.usuario = new Usuario(); //ALOCANDO MEMORIA
  }

  ngOnInit() {
    this.listar();
  }

  public listar(){
    this.service.findAll().subscribe( res => {
      this.usuarioLista = res;
    })
  }

  public gravar(){
    this.service.create(this.usuario).subscribe( res => {
      console.log("Usuário gravado com sucesso!", this.usuario);
      this.listar();
      if(this.usuario){
        this.msg = 'Usuario gravado';
      } else {
        this.msg = 'Erro, não gravou';
      }
    })
  }

}
