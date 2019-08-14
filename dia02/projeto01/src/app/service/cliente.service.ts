import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from 'src/app/model/cliente';


//CONSTANTE DO SERVIÇO
const URL: string='http://localhost:3000/cliente'; //não é obrigatório tipar const

@Injectable()
export class ClienteService{
    constructor(private http: HttpClient){

    }

    //LISTAR TODOS
    public findAll(){
        return this.http.get<Cliente[]>(`${URL}`);
    }

    //GRAVAR
    public create(cliente: Cliente){
        return this.http.post<Cliente>(`${URL}`, cliente);
    }

    //BUSCAR PELO CÓDIGO
    public findByCode(code: number){
        return this.http.get<Cliente>(`${URL}/${code}`);
    }

    //DELETAR
    public delete(id: number){
        return this.http.delete<Cliente>(`${URL}/${id}`);
    }

    //ALTERAR
    public update(cliente: Cliente){
        return this.http.put<Cliente>(`${URL}/${cliente.id}`, cliente);
    }
}