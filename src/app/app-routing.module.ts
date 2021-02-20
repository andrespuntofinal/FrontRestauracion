import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarEditarReservaComponent } from './components/agregar-editar-reserva/agregar-editar-reserva.component';
import { HomeComponent } from './components/home/home.component';
import { ListReservasComponent } from './components/list-reservas/list-reservas.component';
import { VerReservasComponent } from './components/ver-reservas/ver-reservas.component';

const routes: Routes = [
{ path: 'agregar', component: AgregarEditarReservaComponent},
{ path: 'editar/:id', component: AgregarEditarReservaComponent},
{ path: 'ver/:id', component: VerReservasComponent},
{ path: 'vertodo', component: ListReservasComponent},
{ path: 'home', component: HomeComponent},
{ path: '', component: HomeComponent, pathMatch: 'full' },
{ path: '**', redirectTo: '/' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
