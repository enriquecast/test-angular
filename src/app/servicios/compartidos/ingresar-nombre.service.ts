import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class IngresarNombreService {
  public valor: Subject<any> = new Subject();

  constructor() { }

  obtenerValor() {
    return this.valor;
  }

  asignarValor(valorEnviado: string) {
    return this.valor.next(valorEnviado)
  }

}
