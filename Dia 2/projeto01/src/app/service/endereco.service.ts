import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//CONSTANTE DO SERVIÇO
const URL ='https://api.postmon.com.br/v1/cep'; //não é obrigatório tipar const

@Injectable()
export class EnderecoService{

    constructor(private http: HttpClient){

    }

    public findByCep(vcep: string){
        return this.http.get<any>(`${URL}/${vcep}`)
    }

}