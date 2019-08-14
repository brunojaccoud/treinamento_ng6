import { ProdutoComponent } from './produto/produto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from 'src/app/usuario/usuario.component';


const routes: Routes = [
  { path:'', redirectTo: 'usuario', pathMatch: 'full'},
  { path:'usuario', component: UsuarioComponent},
  { path:'produto', component: ProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
