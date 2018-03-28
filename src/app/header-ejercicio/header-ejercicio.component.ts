import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { IngresarNombreService } from '../servicios/compartidos/ingresar-nombre.service';


@Component({
  selector: 'app-header-ejercicio',
  templateUrl: './header-ejercicio.component.html',
  styleUrls: ['./header-ejercicio.component.css']
})
export class HeaderEjercicioComponent implements OnInit {
  public valor: string = '';

  constructor(public ingresarNombreService: IngresarNombreService) { }

  cargarNombre(){
    this.ingresarNombreService.asignarValor(this.valor);
    // this.valor = ''
  }

  ngOnInit() {


  }
}
