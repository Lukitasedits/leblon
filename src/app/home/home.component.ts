import { PeliculasService } from './../services/peliculas.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pelicula } from '../models/pelicula';
import { ImdbService } from '../services/imdb.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
/*  peliculas: Pelicula[] = PeliculasInfo; */
indiceCarrusel: number = 1;
imagenes: string[] = [];
@ViewChild('saberMasRef')
saberMas: ElementRef;

constructor(private imdbService: ImdbService, private peliculasService: PeliculasService){};

ngOnInit(): void {

  this.peliculasService.getList().subscribe(
    el => {
      for(let i = 0; i < el.length; i++){
        if(el[i].imagen != null && el[i].imagen != 'null' && el[i].imagen != '/assets/imagenes/NotImagen.jpg'){
          this.imagenes.push(el[i].imagen);
        }
      }
    }
  )

  setInterval(() => {

    if(this.indiceCarrusel<this.imagenes.length-1){
      this.indiceCarrusel++;
    } else {
      this.indiceCarrusel = 0;
    }
  }, 1000);
}

scrollToSaberMas(){
  this.saberMas.nativeElement.scrollIntoView({behavior: 'smooth'});
}


}
