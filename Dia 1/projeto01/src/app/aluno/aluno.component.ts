import { Component, OnInit } from '@angular/core';
import { Aluno } from './../model/aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  aluno : Aluno;
  alunos : Aluno[] = [];

  //É O PRIMEIRO A SER EXECUTADO
  constructor() {
    this.aluno = new Aluno() //ALOCANDO MEMORIA PARA O ALUNO SER CRIADO;
  }

  //É O SEGUNDO A SER EXECUTADO
  ngOnInit() {

  }

  //MÉTODO DO BOTÃO MÉDIA
  public calcularMedia(){
    this.aluno.gerarMedia();
  }

  public calcularSituacao(){
    this.aluno.gerarSituacao();
  }

  listaDeAlunos = [
    {
      id: 100,
      nome: 'bruno',
      disciplina: 'angular',
      nota1: 10,
      nota2: 7,
      media: 8.5,
      situacao: 'Aprovado'
    },
    {
      id: 101,
      nome: 'joazinho',
      disciplina: 'java',
      nota1: 9,
      nota2: 8,
      media: 8.5,
      situacao: 'Aprovado'
    },
    {
      id: 102,
      nome: 'zequinha',
      disciplina: 'angular',
      nota1: 8,
      nota2: 7,
      media: 7.5,
      situacao: 'Aprovado'
    }
  ] as Aluno[];

  public listarAlunos(aluno: Aluno){
    console.log('Aluno: ', aluno);
    this.aluno = aluno;
  }

}
