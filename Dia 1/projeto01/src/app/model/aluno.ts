export class Aluno {

    //ATRIBUTOS
    id : number;
    nome : string;
    disciplina : string;
    nota1 : number = 0;
    nota2 : number = 0;

    media : number;
    situacao : string;

    //SOBRECARGA DE CONSTRUTORES
    //construtor vazio - pouco usado
    constructor();

    //construtor cheio
    constructor
        (id : number, nome : string, disciplina : string, nota1 : number, nota2 : number);

    //construtor cheio
    constructor(id?: number, nome?: string, disciplina? : string, nota1? : number, nota2? : number){
        this.id = id;
        this.nome = nome;
        this.disciplina = disciplina;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    get $id(){
        return this.id;
    }

    set $id(id:number){
        this.id;
    }

    get $nome(){
        return this.nome;
    }

    set $nome(id:string){
        this.$nome
    }

    get $disciplina(){
        return this.$disciplina;
    }

    set $disciplina(disciplina:string){
        this.disciplina;
    }

    get $nota1(){
        return this.nota1;
    }

    set $nota1(nota1nota1:number){
        this.nota1;
    }

    get $nota2(){
        return this.$nota2;
    }

    set $nota2(nota2:number){
        this.nota2;
    }

    public gerarMedia(){
        this.media = (this.nota1 + this.nota2)/2;
        return this.media;
    }

    public gerarSituacao(){
        this.situacao = (this.media >= 7)? 'Aprovado' :
                        (this.media >= 5)? 'Recuperação' : 'Reprovado';
        return this;
    }



}