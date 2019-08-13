import { EnderecoService } from './../service/endereco.service';
import { Endereco } from './../model/endereco';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  msg: string = '';
  endereco: Endereco;

  constructor(private serviceEnd: EnderecoService) {
    this.endereco = new Endereco();
  }

  ngOnInit() {
  }

  public buscarCep(){
    this.serviceEnd.findByCep(this.endereco.cep).subscribe( res => {
      this.endereco = res;
      if(this.endereco.bairro){
        this.msg = 'Endereço encontrado';
      } else {
        this.msg='Endereço não encontrado';
      }
      console.log('Endereço encontrado: ', this.endereco);
    }),
    err => {
      console.log('erro...', err.error);
    }
  }

}
