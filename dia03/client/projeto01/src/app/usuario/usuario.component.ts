import { Usuario } from './../model/usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;
  usuarioLista: Usuario[]=[];
  msg: string = '';

  fg: FormGroup; //RESPONSÁVEL PELOS FORMULÁRIOS

  //CONSTRUTOR PASSA A CONEXÃO DO SERVICE COM O BD
  constructor(private service: UsuarioService, private fb: FormBuilder) { //BUILDER: RESP. POR CONSTRUIR
    this.usuario = new Usuario(); //ALOCANDO MEMORIA
  }

  ngOnInit() {

    //FORM GROUP RECEBERÁ UMA SÉRIE DE VALIDAÇÕES
    this.fg = this.fb.group({
      codigo: [
        0, Validators.compose([
          Validators.required,
          Validators.min(20),
          Validators.max(5000)
        ])
      ],
      nome: [
        '', Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
          Validators.pattern(/^[a-z A-Z]$/)
        ])
      ],
      email: [
        '', Validators.compose([
          Validators.required,
          Validators.email
        ])
      ]
    });

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

  //MÉTODO PARA RESGATAR OS NAMEs DA TELA
  private getControl(name: string){
    return this.fg.controls[name];
  }

  //resgato o name de cada campo

  //resgato codigo
  get codigo(){
    return this.getControl('codigo');
  }

  //resgato nome
  get nome(){
    return this.getControl('nome');
  }

  //resgato email
  get email(){
    return this.getControl('email');
  }



}
