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
  public objetoUsuario1: Usuarios[] = [];
  public objetoUsuario2: Usuarios[] = [];

  constructor() {
   
  }

  ngOnInit() {
    this.objetoUsuario.push(
      {
        nombre: 'raul'
      },
      {
        nombre: 'jesus'
      },
      {
        nombre: 'david'
      },
      {
        nombre: 'alexis'
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
