import { PeliculasService } from './../services/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../models/pelicula';
import { ImdbService } from '../services/imdb.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService){};

  ngOnInit(): void {
    this.peliculasService.getList().subscribe(
      el => {
        for(let i = 0; i < el.length; i++){
          let pelicula: Pelicula = el[i];
          this.peliculas.push(pelicula);
        }
      }
    )
  }

  onScrollDown():void{
    console.log("down");
  }

}
