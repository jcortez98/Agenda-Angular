import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
//componentes
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriaComponent } from './components/dashboard/categoria/categoria.component';
import { TareaComponent } from './components/dashboard/tarea/tarea.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsuarioComponent } from './components/dashboard/usuario/usuario.component';
import { UsuarioDetalleComponent } from './components/dashboard/usuario/usuario-detalle.component';
import { UsuarioEditarComponent } from './components/dashboard/usuario/usuario-editar.component';
import { ContactoComponent } from './components/dashboard/contacto/contacto.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';


//rutas
import { APP_ROUTING } from './app.routes';

// servicios
import { UsuarioService } from './services/usuario.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ContactoService } from './services/contacto.service';
import { CategoriaService } from './services/categoria.service';
import { TareaService } from './services/tarea.service';
import { CitaService } from './services/cita.service';
import { HistorialComponent } from './components/dashboard/historial/historial.component';
import { CitaComponent } from './components/dashboard/cita/cita.component';
import { SubirComponent } from './components/dashboard/subir/subir.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CategoriaComponent,
    TareaComponent,
    LoginComponent,
    SignupComponent,
    UsuarioComponent,
    ContactoComponent,
    UsuarioDetalleComponent,
    UsuarioEditarComponent,
    NavbarComponent,
    HistorialComponent,
    CitaComponent,
    SubirComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CategoriaService,UsuarioService,AuthGuardService,ContactoService,TareaService,CitaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
