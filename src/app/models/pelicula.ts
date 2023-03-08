export class Pelicula {
  public indice: number;
  public nombre: string;
  public imagen: string;
  public id: string;
 /*  private _director: string;
  private _interprete: string;
  private _genero: string;
  private _subtitulada: boolean;
  private _edad: string;
  private _duracion: number; */

  constructor(nombre: string, imagen: string, id: string /* , director: string, interprete: string, genero: string, subtitulada: boolean, edad: string, duracion: number */){
    this.nombre = nombre;
    this.imagen = imagen;
    this.id = id;
   /*  this._director = director;
    this._interprete = interprete;
    this._genero = genero;
    this._subtitulada = subtitulada;
    this._edad = edad;
    this._duracion = duracion; */
  }

  /* public get _title(): string{
    return this.title;
  }

  public set _title(value: string){
    this.title = value;
  } */

  /* public get director(): string{
    return this._director;
  }

  public set director(value: string){
    this._director = value;
  }

  public get interprete(): string{
    return this._interprete;
  }

  public set interprete(value: string){
    this._interprete = value;
  }

  public get genero(): string{
    return this._genero;
  }

  public set genero(value: string){
    this._genero = value;
  }

  public get subtitulada(): boolean{
    return this._subtitulada;
  }

  public set subtitulada(value: boolean){
    this._subtitulada = value;
  }

  public get edad(): string{
    return this._edad;
  }

  public set edad(value: string){
    this._edad = value;
  }

  public get duracion(): numb{
    return this._duracion;
  }

  public set duracion(value: numb){
    this._duracion = value;
  } */
}
