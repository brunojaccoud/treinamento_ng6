import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login;

  constructor(private service: LoginService, private router: Router) {
    this.login = new Login();
  }

  ngOnInit() {
  }

  //método para validar login e senha
  isLoginValido(login: Login): boolean{
    if(login){
      if( !login.email || !login.senha){
        return false;
      } else {
        return true;
      }
    }
  }

  //método para logar
  entrarLogin(){
    if(this.isLoginValido(this.login)){
      this.service.signInWithEmailAndPassword(this.login).then(res => {
        console.log(res);
        this.router.navigate(['lista']);
      }, error => {
        console.log("Redigite email e senha.", error);
      })
    }
  }

}
