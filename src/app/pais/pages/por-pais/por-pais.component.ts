import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor:pointer;
    }
  `]
})
export class PorPaisComponent {

  constructor(private paisService:PaisService) { }

  termino: string = "";
  hayError: boolean = false;

  paises: Country[] = [];

  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  buscar(termino:string): void {
    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarPais( termino )
      .subscribe({
        next: (paises) => this.paises = paises,
        error: (err) => {
          this.hayError = true;
          this.paises = [];
        }
      });
        
  }

  sugerencias( termino:string ) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais( termino )
      .subscribe({
        next: (paises) => this.paisesSugeridos = paises.splice(0,5),
        error: () => this.paisesSugeridos = []
      });
  };

  buscarSugerido() {
    this.buscar(this.termino);
  }
}