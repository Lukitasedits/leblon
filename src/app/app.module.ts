import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculaComponent } from './catalogo/pelicula/pelicula.component';

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiKeyInterceptor } from './api-key-interceptor';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { FooterComponent } from './footer/footer.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent,
    PeliculaComponent,
    HeaderComponent,
    HomeComponent,
    CatalogoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiKeyInterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
