import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  ngOnInit(): void {
    this.debouncer
      .pipe( debounceTime(400) )
      .subscribe( valor => {
        this.onDebounce.emit(valor);
      });
  };

  @Output() onEnter:EventEmitter<string> = new EventEmitter();
  @Output() onDebounce:EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino:string = '';

  buscar(){
    this.onEnter.emit( this.termino );
  };

  teclaPresionada() {
    this.debouncer.next( this.termino );
  };
}
