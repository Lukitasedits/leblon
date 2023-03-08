import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { ImdbService } from 'src/app/services/imdb.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {

  @Input('pelicula')
  pelicula: Pelicula;

  constructor(private imdbService: ImdbService) {

  }

  ngOnInit(): void {
    if(this.pelicula.imagen == 'null'){
      this.pelicula.imagen = '/assets/imagenes/NotImagen.jpg';
    }
  }

}
