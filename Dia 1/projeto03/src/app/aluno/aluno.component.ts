import { Aluno } from 'src/app/model/aluno';
import { IAluno } from './../control/IAlunoCalculo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements IAluno {

  //Variaveis
  aluno: Aluno;
  alunos: Aluno[]=[];
  soma: number[]=[];
  somaTudo: number=0;
  
  //Alocação de espação
  constructor(){
    this.aluno = new Aluno();
  }

  gerarMedia(): void {
    this.aluno.media = (this.aluno.nota1 + this.aluno.nota2)/2;
  }

  gerarSituacao(): void {
    this.aluno.situacao = (this.aluno.media>=7)? 'Aprovado' : (this.aluno.media>=5)? 'Recuperacao' : 'Reprovado';
  }

  listaAluno = [
    {
      id:100,
      nome: 'bruno',
      disciplina: 'angular',
      nota1: 10,
      nota2: 7,
      media: 8.5,
      situacao: 'Aprovado'
    },
    {
      id:101,
      nome: 'leticia',
      disciplina: 'angular',
      nota1: 10,
      nota2: 7,
      media: 8.5,
      situacao: 'Aprovado'
    }
  ] as Aluno[];

  //método funcional usando filter
  funcionalSomaItem(): void {
    this.soma = this.listaAluno.filter(num => num.id > 0).
      map(num => {
          return (num.nota1 + num.nota2)
        }
      )
    }


  funcionalItem(): void {
    this.somaTudo = this.listaAluno.filter(num => num.id > 0).
      reduce((sum, aluno) => {
          return sum + (aluno.nota1 + aluno.nota2);
        } , 0)
    }


}
