export class Funcionario{
    
    //VARIAVEIS
    id : number;
    nome : string;
    email : string;
    funcao : string;
    salario: number;
    bonus : number;
    foto : string;

    //CONSTRUTOR COM AS VARIAVEIS OPCIONAIS
    constructor(id?:number, nome?:string, email?:string,funcao?:string,salario?:number,foto?:string){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.funcao = funcao;
        this.salario = salario;
        this.foto = foto;
    }

}