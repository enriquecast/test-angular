import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { EjercicioComponent } from './primer-ejercicio/ejercicio.components';
import { SegundoEjercicioComponent } from './segundo-ejercicio/segundo-ejercicio.component';
import { ContainerEjercicioComponent } from './container-ejercicio/container-ejercicio.component';
import { HeaderEjercicioComponent } from './header-ejercicio/header-ejercicio.component';
import { BodyEjercicioComponent } from './body-ejercicio/body-ejercicio.component';
import { FooterEjercicioComponent } from './footer-ejercicio/footer-ejercicio.component';
import { IngresarNombreService } from './servicios/compartidos/ingresar-nombre.service';
import { BodyChildComponent } from './body-child/body-child.component';
import { NavbarEjercicioComponent } from './navbar-ejercicio/navbar-ejercicio.component';
import { AppRoutingModule } from './app-routing.module';
import { ContainterEjercicioDosComponent } from './containter-ejercicio-dos/containter-ejercicio-dos.component';
import { ContainerEjercicioTresComponent } from './container-ejercicio-tres/container-ejercicio-tres.component';
import { ContainerEjercicioCuatroComponent } from './container-ejercicio-cuatro/container-ejercicio-cuatro.component';



@NgModule({
  declarations: [
    AppComponent,
    EjercicioComponent,
    SegundoEjercicioComponent,
    ContainerEjercicioComponent,
    HeaderEjercicioComponent,
    BodyEjercicioComponent,
    FooterEjercicioComponent,
    BodyChildComponent,
    NavbarEjercicioComponent,
    ContainterEjercicioDosComponent,
    ContainerEjercicioTresComponent,
    ContainerEjercicioCuatroComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [IngresarNombreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
