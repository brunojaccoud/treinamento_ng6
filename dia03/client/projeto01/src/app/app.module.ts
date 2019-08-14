import { UsuarioService } from './service/usuario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UsuarioComponent } from './usuario/usuario.component';
import { ProdutoComponent } from './produto/produto.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
