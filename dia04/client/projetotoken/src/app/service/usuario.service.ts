import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Usuario } from 'src/app/model/usuario';
import { map } from "rxjs/operators";

const URL1: string = 'http://localhost:3000/auth'; //VIA POST
const URL2: string = 'http://localhost:3000/adm/list'; //VIA GET

@Injectable()
export class UsuarioService{

    constructor( private http: HttpClient, private router: Router ){

    }

    //MÉTODO PARA LOGAR E GERAR O TOKEN
    public getLoginAndToken( usuario: Usuario ){

        return this.http.post<Usuario>(`${URL1}`, usuario).pipe(map(res => { //map separa em campos e joga o valor em res
            localStorage.setItem('tokenizer', res.token);
            //mas pega o campo token e joga em localStorage(SET)
            console.log(res);
            alert('Está logado' + JSON.stringify(res));
            this.router.navigateByUrl(`/listagem`);
            return res;
        }));

    }

    //MÉTODO PARA AUTENTICAR, ENTRAR NO DIRETÓRIO E LISTAR
    public lisAuthentication(){
        let header = new HttpHeaders(); //habilita o uso de cabeçalho
        header = header.append('authorization', `bearer ${localStorage.getItem('tokenizer')}`); //verifica a autorização do server e através do bearer pega (GET) o token
        return this.http.get<Usuario[]>(`${URL2}`, {headers: header}); //RETORNA A LISTA
    }

    //CONFERE SE ESTÁ LOGADO
    public isLogado(): boolean {
        return localStorage.getItem('tokenizer') != null;
    }

    public logoff(){
        localStorage.removeItem('tokenizer');
        return this.router.navigateByUrl('/usuario');
    }

}