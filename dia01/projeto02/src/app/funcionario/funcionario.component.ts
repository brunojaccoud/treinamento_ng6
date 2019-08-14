import { Component, OnInit, Input } from '@angular/core';
import { Funcionario } from 'src/app/model/funcionario';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  @Input() funcionario: Funcionario;
  @Input() mensagem: string;

  @Input() numero1: number;
  @Input() numero2: number;

  constructor() { }

  ngOnInit() {
  }

}
