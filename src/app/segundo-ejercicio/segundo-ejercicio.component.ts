import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-ejercicio',
  templateUrl: './segundo-ejercicio.component.html',
  styleUrls: ['./segundo-ejercicio.component.css']
})
export class SegundoEjercicioComponent implements OnInit {
  public model: any;

  constructor() { }

  ngOnInit() {
    this.model = 'Hola Mundo...'
  }

}
