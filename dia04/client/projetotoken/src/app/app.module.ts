import { UsuarioService } from './service/usuario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ListagemComponent } from './listagem/listagem.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
