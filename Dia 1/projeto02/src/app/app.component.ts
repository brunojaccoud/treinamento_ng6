import { lista } from './control/funcionario.controle';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/model/funcionario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  //VARIÁVEL DA LISTA
  funcionarios: Funcionario[] = [];

  //VARIÁVEIS PARA PASSAGEM DE DADOS
  numero1app: number = 0;
  numero2app: number = 0;
  mensagemapp: string;
  funcionarioSelecionado: Funcionario;

  constructor(){
    console.log('Construtor roda primeiro');
    this.funcionarioSelecionado = new Funcionario(); //ALOCANDO MEMÓRIA PARA SALVAR AS VARIÁVEIS DE FUNCIONARIO
  }

  ngOnInit(): void {
    console.log('OnInit roda segundo');
    this.listar();
  }

  public listar(){
    this.funcionarios = lista; //TRAZ A LISTA GLBAL ENCHENDO FUNCIONARIOS
  }

  public detalhar(recebe: Funcionario){
    this.funcionarioSelecionado = recebe;
    this.mensagemapp = 'Mensagem vinda do componente pai (App component)';
    this.numero1app = recebe.bonus; //AO SER CLICADO RECEBERÁ O BÔNUS DA LISTA
    this.numero2app = recebe.salario; //RECEBERÁ O SALÁRIO DA LISTA
  }
  
}
