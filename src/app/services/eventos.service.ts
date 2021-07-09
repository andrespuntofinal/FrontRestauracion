import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Eventos } from '../models/eventos';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  //myAppUrl="https://localhost:44358/";
  myAppUrl="http://localhost:9095/";
  myAppUrlApi="api/Eventos/";

  httpOptions={

    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  };



  constructor(private http: HttpClient) { }

  getListEventos():Observable<Eventos[]>{
    return this.http.get<Eventos[]>(this.myAppUrl + this.myAppUrlApi);
    
  }

  deleteEventos(id: number):Observable<Eventos> {
    return this.http.delete<Eventos>(this.myAppUrl + this.myAppUrlApi + id);
    
  }

  guardarEventos(eventos: Eventos):Observable<Eventos> {

    console.log("param:" + eventos);
    return this.http.post<Eventos>(this.myAppUrl + this.myAppUrlApi, eventos, this.httpOptions );
    
  }

  cargarEventos(id: number):Observable<Eventos[]> {
    return this.http.get<Eventos[]>(this.myAppUrl + this.myAppUrlApi + id );
    
  }

  actualizarEventos(id: number, eventos: Eventos):Observable<Eventos> {
    return this.http.put<Eventos>(this.myAppUrl + this.myAppUrlApi, eventos, this.httpOptions );
    
  }

}
