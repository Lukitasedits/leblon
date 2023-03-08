import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';
import apiInfo from '../../assets/JSON/api.json'
import pelisInfo from '../../assets/JSON/PELICULAS.json'

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  private API_SERVER = "https://imdb-api.com/en/API/";

  constructor(public http:HttpClient) { }

  public getImagen(pelicula: Pelicula): Observable<any>{
    const a: any= '';
    return of(a)
     //return this.http.get<any>("https://imdb-api.com/es/API/SearchMovie/k_wrm99p8q/" + pelicula.nombre);
  }

  public getList(): Observable<Pelicula[]>{
    const a: any= '';
    return of(a);
    //return of(pelisInfo)
    //return this.http.get<any>("https://imdb-api.com/en/API/IMDbList/k_wrm99p8q/ls564105160");
  }
}
