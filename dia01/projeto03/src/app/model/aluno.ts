export class Aluno {

    //atributos da classe Aluno
    id: number = 0;
    nome: string = '';
    disciplina: string = '';
    nota1: number = 0;
    nota2: number = 0;
    media: number = 0;
    situacao: string = '';

    //construtor opcional
    constructor (id?:number,nome?:string,disciplina?:string,nota1?:number,nota2?:number,media?:number,situacao?:string){
        this.id = id;
        this.nome = nome;
        this.disciplina = disciplina;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.situacao = situacao;
    }

    //métodos

    //calculo de média

    public gerarMedia(){
        this.media = (this.nota1 + this.nota2)/2;
    }

    //calculo de situação

    public gerarSituacao(){
        this.situacao = (this.media>=7)? 'Aprovado' : (this.media>=5)? 'Recuperacao' : 'Reprovado';
    }

}