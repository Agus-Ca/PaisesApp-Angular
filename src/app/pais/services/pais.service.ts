import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  //! la nueva API de rest countries no admite los params de esta manera
  //// get httpParams() {
  ////   return new HttpParams().set( 'fields', 'flags,capital,name,population,cca3')
  //// }

  apiUrl: string = "https://restcountries.com/v3.1";

  buscarPais( termino:string ):Observable<Country[]> {    
    const url: string = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url ).pipe(tap(console.log));
  }
  
  buscarCapital( termino:string ):Observable<Country[]> {    
    const url: string = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  buscarPaisPorAlpha(id:string):Observable<Country> {    
    const url: string = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

  buscarPaisPorRegion(termino:string):Observable<Country[]> {
    const url: string = `${ this.apiUrl }/region/${ termino }`;
    return this.http.get<Country[]>( url )
  }
}