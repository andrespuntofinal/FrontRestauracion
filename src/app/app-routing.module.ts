import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarEditarReservaComponent } from './components/agregar-editar-reserva/agregar-editar-reserva.component';
import { HomeComponent } from './components/home/home.component';
import { ListReservasComponent } from './components/list-reservas/list-reservas.component';
import { VerReservasComponent } from './components/ver-reservas/ver-reservas.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './services/auth.guard';
import { PaneladminComponent } from './components/paneladmin/paneladmin.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { CreareventosComponent } from './components/creareventos/creareventos.component';

const routes: Routes = [
{ path: 'agregar', component: AgregarEditarReservaComponent},
{ path: 'editar/:id', component: AgregarEditarReservaComponent},
{ path: 'ver/:id', component: VerReservasComponent},
{ 
  
  path: 'vertodo', 
  component: ListReservasComponent,
  canActivate: [ AuthGuard ]

},
{ 
  
  path: 'paneladmin', 
  component: PaneladminComponent,
  canActivate: [ AuthGuard ]

},
{ 
  
  path: 'eventos', 
  component: EventosComponent,
  canActivate: [ AuthGuard ]

},
{ 
  
  path: 'creareventos', 
  component: CreareventosComponent,
  canActivate: [ AuthGuard ]

},
{ path: 'home', component: HomeComponent},
{ path: 'callback', component: CallbackComponent},
{ path: '', component: HomeComponent, pathMatch: 'full' },
{ path: '**', redirectTo: '/' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
