import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  apiUrl: string = "https://restcountries.com/v3.1";

  buscarPais( termino:string ):Observable<any> {    
    const url: string = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get( url );
  }

}