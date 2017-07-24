import { Routes } from '@angular/router';
import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { UsuarioEditarComponent } from './usuario-editar.component';

export const usuario_routes:Routes = [
    { path: 'detalle', component: UsuarioDetalleComponent},
    { path: 'editar', component: UsuarioEditarComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'contacto'}
]