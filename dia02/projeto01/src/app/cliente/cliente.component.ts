import { Cliente } from './../model/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente;
  clienteLista: Cliente[]=[];

  //INICIALIZA O SERVIÇO
  constructor(private serviceCli: ClienteService) {
    this.cliente = new Cliente(); //ALOCANDO MEMÓRIA PARA O CLIENTE
  }

  ngOnInit() {
    this.listarClientes();
  }

  //MÉTODO LISTAR
  public listarClientes(){
    this.serviceCli.findAll().subscribe(res => { this.clienteLista = res; });
  }

  //MÉTODO GRAVAR
  public gravar(){
    this.serviceCli.create(this.cliente).subscribe(res =>{ 
      this.cliente = res;
      if(this.cliente.id){
        console.log('Cliente gravado com sucesso!');
        this.listarClientes();
      } else {
        this.cliente = new Cliente();
        this.listarClientes();
      }
    });
  }

}