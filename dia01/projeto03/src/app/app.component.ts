import { Component } from '@angular/core';
import { AlunoComponent } from './aluno/aluno.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends AlunoComponent{

  public calcularMedia(){
    this.gerarMedia();
  }

  calcularSituacao(){
    this.gerarSituacao();
  }

  calcularFuncionalSomaItem(){
    this.funcionalSomaItem();
  }

  calcularFuncionalItem(){
    this.funcionalItem();
  }

}
