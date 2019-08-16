export class Produto{
    
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    imagem: string;

    constructor(id?:number, nome?:string, preco?:number, descricao?:string, imagem?:string){

        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.imagem = imagem;

    }

    

}