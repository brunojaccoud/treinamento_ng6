import { UsuarioService } from './../service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';

@Component({
	selector: 'app-usuario',
	templateUrl: './usuario.component.html',
	styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

	usuario: Usuario;
	resposta: any;

	constructor(private service: UsuarioService) {
		this.usuario = new Usuario();
	}

	ngOnInit() {
	}

	//METODO DO BOTÃO LOGAR
	public logar(){
		this.service.getLoginAndToken(this.usuario).subscribe(res => {
			this.usuario = res;
		}, err=> {
			console.log('Erro...', err.error);
		})
	}



}