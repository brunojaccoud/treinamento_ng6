import { UsuarioComponent } from './usuario/usuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';


const routes: Routes = [
  {path: '', redirectTo: 'usuario', pathMatch:'full'},
  {path: 'usuario', component: UsuarioComponent },
  {path: 'listagem', component: ListagemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
