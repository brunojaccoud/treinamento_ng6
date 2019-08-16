import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/model/login';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class LoginService{

    private user: Observable<firebase.User>;
    public usuarioLogado: firebase.User;

    constructor(private firebaseAuth: AngularFireAuth, private router: Router){
        this.usuarioLogado = null;
        this.user = firebaseAuth.authState;
        this.user.subscribe(res => {console.log(res)
            if(res){
                this.usuarioLogado = res;
            } else {
                this.usuarioLogado = null;
            }
        })
    }

    signInWithEmailAndPassword(login: Login){
        return this.firebaseAuth.auth.signInWithEmailAndPassword(login.email, login.senha);
    }

    logout(){
        this.firebaseAuth.auth.signOut().then(res => {
        this.router.navigate(['login']);
        })
    }

}