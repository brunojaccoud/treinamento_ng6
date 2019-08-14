import { Usuario } from './../model/usuario';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

const URL = 'http://127.0.0.1:3344/usuario';

@Injectable()
export class UsuarioService{

    constructor(private http: HttpClient){ }

    //MÉTODO PARA GRAVAR
    public create(usuario: Usuario){
        return this.http.post<Usuario>(`${URL}`, usuario);
    }

    //MÉTODO PARA LISTAR
    public findAll(){
        return this.http.get<Usuario[]>(`${URL}`);
    }

}