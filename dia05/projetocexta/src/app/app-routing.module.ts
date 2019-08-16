import { LoginComponent } from './login/login.component';
import { ListaComponent } from './lista/lista.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CestaComponent } from 'src/app/cesta/cesta.component';
import { ErroComponent } from "./erro/erro.component";


const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'cesta', component: CestaComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
