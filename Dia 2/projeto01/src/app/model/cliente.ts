import { Endereco } from './endereco';
export class Cliente{

    idCliente: number;
    nome: string;
    email: string;

    endereco: Endereco;

    constructor(idCliente?:number, nome?:string, email?:string){
        this.idCliente = idCliente;
        this.nome = nome;
        this.email = email;
    }

}