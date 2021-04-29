import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarReservaComponent } from './components/agregar-editar-reserva/agregar-editar-reserva.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListReservasComponent } from './components/list-reservas/list-reservas.component';
import { CountReservasComponent } from './components/list-reservas/count-reservas/count-reservas.component';
import { VerReservasComponent } from './components/ver-reservas/ver-reservas.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material.module'; 

import { CallbackComponent } from './components/callback/callback.component';

import { AuthModule } from '@auth0/auth0-angular';
import { PaneladminComponent } from './components/paneladmin/paneladmin.component';
import { CreareventosComponent } from './components/creareventos/creareventos.component';


@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarReservaComponent,
    NavbarComponent,
    ListReservasComponent,
    CountReservasComponent,
    VerReservasComponent,
    HomeComponent,
    CallbackComponent,
    PaneladminComponent,
    CreareventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,

    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'andrespuntofinal.us.auth0.com',
      clientId: 'p2HLpdFydEoGmyttZXbeS5pDBR399GIT'
    }),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
