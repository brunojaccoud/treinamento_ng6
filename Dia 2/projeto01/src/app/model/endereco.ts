import { Cliente } from './cliente';
export class Endereco{

    idEndereco: number;
    logradouro: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;

    client: Cliente;

    constructor(idEndereco?:number, logradouro?:string, bairro?:string, cidade?:string, estado?:string, cep?:string){
        this.idEndereco = idEndereco;
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
    }

}