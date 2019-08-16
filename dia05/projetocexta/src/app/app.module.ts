import { ProdutoService } from './service/produto.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { CestaComponent } from './cesta/cesta.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from "@angular/forms";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire";

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CestaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
