import { Endereco } from './endereco';
export class Cliente{

    id: number;
    nome: string;
    email: string;

    //RELACIONAMENTO ONE TO ONE
    endereco: Endereco;

    constructor(id?:number, nome?:string, email?:string){
        this.id = id;
        this.nome = nome;
        this.email = email;
    }

}