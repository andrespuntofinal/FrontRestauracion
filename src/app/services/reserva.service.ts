import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../models/reserva';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  //myAppUrl="https://localhost:44358/";
  myAppUrl= environment.myAppUrl ;
  myAppUrlApi="api/reservas/";

  httpOptions={

    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  };

  constructor(private http: HttpClient) { }

  getListReserva():Observable<Reserva[]>{
    return this.http.get<Reserva[]>(this.myAppUrl + this.myAppUrlApi);
    
  }

  deleteReserva(id: number):Observable<Reserva> {
    return this.http.delete<Reserva>(this.myAppUrl + this.myAppUrlApi + id);
    
  }

  guardarReserva(reserva: Reserva):Observable<Reserva> {

    console.log("param:" + reserva);
    return this.http.post<Reserva>(this.myAppUrl + this.myAppUrlApi, reserva, this.httpOptions );
    
  }

  cargarReserva(id: number):Observable<Reserva> {
    return this.http.get<Reserva>(this.myAppUrl + this.myAppUrlApi + id );
    
  }

  actualizarReserva(id: number, reserva: Reserva):Observable<Reserva> {
    return this.http.put<Reserva>(this.myAppUrl + this.myAppUrlApi, reserva, this.httpOptions );
    
  }

}
