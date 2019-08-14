import { Funcionario } from './../model/funcionario';

//CONSTANTE GLOBAL
export const acrescimo = function(salario: number, bonus:number): number{

    if(bonus<100){
        throw new Error ('Valor minimo para bonus é de R$100,00');
    }

    return +salario + +bonus;

}

export const lista = [
    {
        id: 100,
        nome: 'bruno',
        email: 'an 1',
        salario: 4000,
        bonus: 12000,
        foto: 'https://randomuser.me/api/portraits/lego/2.jpg'
    },
    {
        id: 101,
        nome: 'joazinho',
        email: 'estag',
        salario: 2000,
        bonus: 6000,
        foto: 'https://randomuser.me/api/portraits/lego/1.jpg'
    }
] as Funcionario[];