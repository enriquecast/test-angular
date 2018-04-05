import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContainerEjercicioComponent } from './container-ejercicio/container-ejercicio.component';
import { ContainterEjercicioDosComponent } from './containter-ejercicio-dos/containter-ejercicio-dos.component';
import { ContainerEjercicioTresComponent } from './container-ejercicio-tres/container-ejercicio-tres.component';
import { ContainerEjercicioCuatroComponent } from './container-ejercicio-cuatro/container-ejercicio-cuatro.component';

const appRoutes: Routes = [
    {
        path: '',
        component: ContainerEjercicioComponent
    },
    {
        path: 'ejerciciouno',
        component: ContainerEjercicioComponent
    },
    {
        path: 'ejerciciodos',
        component: ContainterEjercicioDosComponent
    },
    {
        path: 'ejerciciotres',
        component: ContainerEjercicioTresComponent
    },
    {
        path: 'ejerciciocuatro',
        component: ContainerEjercicioCuatroComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }