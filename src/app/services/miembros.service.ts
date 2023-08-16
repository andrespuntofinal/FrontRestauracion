import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Miembros } from '../models/miembros';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MiembrosService {

 
  myAppUrl= environment.myAppUrl ;
  myAppUrlApi="api/miembros/";
  
  httpOptions={

    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  };



  constructor(private http: HttpClient) { }

  getListMiembros():Observable<Miembros[]>{

    console.log("11111" + this.myAppUrl + this.myAppUrlApi);

    return this.http.get<Miembros[]>(this.myAppUrl + this.myAppUrlApi)
                    .pipe(map( data=> data['miembros']));
    
  }


  deleteMiembros(id: number):Observable<Miembros> {
    return this.http.delete<Miembros>(this.myAppUrl + this.myAppUrlApi + id);
    
  }

  guardarEventos(miembros: Miembros):Observable<Miembros> {

    console.log("param:" + miembros);
    return this.http.post<Miembros>(this.myAppUrl + this.myAppUrlApi, miembros, this.httpOptions );
    
  }

  cargarMiembros(id: number):Observable<Miembros[]> {
    return this.http.get<Miembros[]>(this.myAppUrl + this.myAppUrlApi + id );
    
  }

  actualizarMiembros(id: number, miembros: Miembros):Observable<Miembros> {

    console.log("ANTES DE UPDATE " + miembros['id']);
    return this.http.put<Miembros>(this.myAppUrl + this.myAppUrlApi + id, miembros, this.httpOptions);
    
  }

}
