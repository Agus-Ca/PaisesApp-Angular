import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  apiUrl: string = "https://restcountries.com/v3.1";

  buscarPais( termino:string ):Observable<Country[]> {    
    const url: string = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url );
  }
  
  buscarCapital( termino:string ):Observable<Country[]> {    
    const url: string = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  buscarPaisPorAlpha(id:string):Observable<Country[]> {    
    const url: string = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country[]>( url );
  }
}