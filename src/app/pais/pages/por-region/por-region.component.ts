import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  constructor(
    private paisService:PaisService) { }

  ngOnInit(): void {
  }

  regiones:string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva:string = '';
  paisesRegion:Country[] = [];

  activarRegion( region:string ):void {
    if (this.regionActiva === region) { return };

    this.regionActiva = region;
    this.paisesRegion = [];

    this.paisService.buscarPaisPorRegion(region)
      .subscribe({
        next: (paises) => {
          this.paisesRegion = paises;
        },
      });
  }

  getClaseCss( region:string ):string {
    return (region === this.regionActiva) ?  'btn-primary' : 'btn-outline-primary';
  }
}
