import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EjercicioComponent } from './primer-ejercicio/ejercicio.components';
import { SegundoEjercicioComponent } from './segundo-ejercicio/segundo-ejercicio.component';
import { ContainerEjercicioComponent } from './container-ejercicio/container-ejercicio.component';
import { HeaderEjercicioComponent } from './header-ejercicio/header-ejercicio.component';
import { BodyEjercicioComponent } from './body-ejercicio/body-ejercicio.component';
import { FooterEjercicioComponent } from './footer-ejercicio/footer-ejercicio.component';


@NgModule({
  declarations: [
    AppComponent,
    EjercicioComponent,
    SegundoEjercicioComponent,
    ContainerEjercicioComponent,
    HeaderEjercicioComponent,
    BodyEjercicioComponent,
    FooterEjercicioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
