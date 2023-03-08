import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private endpoint = "http://localhost:8080/peliculas";

  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})


  constructor(public http:HttpClient) { }

  public getImagen(pelicula: Pelicula): Observable<Pelicula>{
    return this.http.get<Pelicula>(this.endpoint + "/nombre/" + pelicula.nombre,  {headers: this.httpHeaders});
  }

  public getList(): Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>(this.endpoint,  {headers: this.httpHeaders});
  }
}
