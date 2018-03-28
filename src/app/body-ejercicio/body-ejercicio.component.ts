import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IngresarNombreService } from '../servicios/compartidos/ingresar-nombre.service';

export interface Usuarios {
  id?:number;
  nombre: string;
}

@Component({
  selector: 'app-body-ejercicio',
  templateUrl: './body-ejercicio.component.html',
  styleUrls: ['./body-ejercicio.component.css']
})
export class BodyEjercicioComponent implements OnInit {
  @Output() valorEnviarDesdePapa: EventEmitter<any> = new EventEmitter();

  public objetoUsuario: Usuarios[] = [];

  constructor(public IngresarNombreService: IngresarNombreService) {
   this.IngresarNombreService.obtenerValor().subscribe((data:any) => {
    this.objetoUsuario.push({nombre: data});
    (<HTMLInputElement>document.getElementById('enviar_valor')).value = '';
   })
  }

  ngOnInit() {
    this.objetoUsuario.push(
      {
        nombre: 'raul'
      },
      {
        nombre: 'nicolas'
      },
      {
        nombre: 'juan'
      },
      {
        nombre: 'wilmer'
      });
  }

  clickFila(idLlega: number, nombreLlega: string){
    let objeto: Usuarios[] = [];
    objeto.push({id: idLlega + 1, nombre: nombreLlega})
    this.valorEnviarDesdePapa.emit(objeto);
  }
}
