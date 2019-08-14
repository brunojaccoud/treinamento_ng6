export class Usuario{
    
    _id: any; //_id = id do mongo / any = variável que aceita qualquer valor
    codigo: number = 0;
    nome: string = '';
    email: string = '';

    constructor( _id?: any, codigo?: number, nome?: string, email?: string ){
        this._id = _id;
        this.codigo = codigo;
        this.nome = nome;
        this.email = email;
    }

    

}