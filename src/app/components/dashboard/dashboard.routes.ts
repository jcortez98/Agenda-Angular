import { Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TareaComponent } from './tarea/tarea.component';
import { CitaComponent } from './cita/cita.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { SubirComponent } from './subir/subir.component';
import { HistorialComponent } from './historial/historial.component'
import { usuario_routes } from './usuario/usuario.routes'

export const dashboard_routes:Routes = [
    { path: 'categoria', component: CategoriaComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: 'tarea', component: TareaComponent},
    { path: 'cita', component: CitaComponent},
    { path: 'subir', component: SubirComponent},
    { path: 'historial', component: HistorialComponent},
    { path: 'usuario', component: UsuarioComponent, children: usuario_routes},
    { path: '**', pathMatch: 'full', redirectTo: 'contacto'}
]