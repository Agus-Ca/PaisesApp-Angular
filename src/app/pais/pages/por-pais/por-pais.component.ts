import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  constructor(private paisService:PaisService) { }

  termino: string = "";
  hayError: boolean = false;

  paises: Country[] = [];

  buscar(): void {
    this.hayError = false;
    console.log(this.termino);
    
    this.paisService.buscarPais( this.termino )
      .subscribe( paises => {
        this.paises = paises;
      }, ( err ) => {
        this.hayError = true;
        this.paises = [];
      });
  }

}