import { Component, OnInit, Input } from '@angular/core';
export interface Usuarios {
  nombre: string;
}

@Component({
  selector: 'app-body-ejercicio',
  templateUrl: './body-ejercicio.component.html',
  styleUrls: ['./body-ejercicio.component.css']
})
export class BodyEjercicioComponent implements OnInit {
  public objetoUsuario: Usuarios[] = [];

  constructor() {
   
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
}
