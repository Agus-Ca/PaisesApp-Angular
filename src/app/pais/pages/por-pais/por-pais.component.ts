import { Component } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  constructor() { }

  termino: string = "";

  buscar(): void {
    console.log(this.termino)
  }

}