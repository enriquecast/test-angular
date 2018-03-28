import { Component, OnInit, Input } from '@angular/core';

export interface Usuarios {
  id?: number;
  nombre: string;
}

@Component({
  selector: 'app-body-child',
  templateUrl: './body-child.component.html',
  styleUrls: ['./body-child.component.css']
})
export class BodyChildComponent implements OnInit {
  @Input('seleccionado') seleccion: any;
  public seleccionado: Usuarios[] = [];
  constructor() {

  }

  ngOnInit() {
    this.seleccion.subscribe((data: any) => {
      this.seleccionado = data[0];
    });
  }

}
