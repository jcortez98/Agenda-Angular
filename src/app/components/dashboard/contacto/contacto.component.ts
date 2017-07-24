import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ContactoService } from '../../../services/contacto.service'
import { CategoriaService } from '../../../services/categoria.service'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: []
})
export class ContactoComponent implements OnInit {
  formularioAgregar:FormGroup;
  private model:any = {
    idUsuario: localStorage.getItem('idUsuario'),
    idContacto: 0,
    nombre: '',
    apellido: '',
    direccion: '',
    correo: '',
    telefono: 0,
    idCategoria: 0,
    stringFoto: ''
  }

  private notificacion:any = {
    estado: false,
    mensaje: ''
  }
  constructor(private contactoService: ContactoService,private categoriaService: CategoriaService) {}
  
  
  ngOnInit() {
    let validaciones = [
      Validators.required, Validators.minLength(1)
    ]
    this.categoriaService.getCategorias().subscribe();
    this.contactoService.getContactos().subscribe();
  }
  private agregar = function(){
    console.log(this.model)
    this.contactoService.addContacto(this.model).subscribe(res => {
      this.setNotificacion(res);
      this.resetForm();
      this.contactoService.getContactos().subscribe();
    });
  }
  cargar = function(data:any){
    this.model.idContacto = data.idContacto;
    this.model.nombre = data.nombre;
    this.model.apellido = data.apellido;
    this.model.direccion = data.direccion;
    this.model.correo = data.correo;
    this.model.telefono = data.telefono;
    this.model.idCategoria = data.idCategoria;
    this.model.stringFoto = data.stringFoto;
    console.log(JSON.stringify(this.model))
  }
  editar = function(){
    this.contactoService.updateContacto(this.model).subscribe(res => {
      this.setNotificacion(res);
      this.resetForm();
      this.contactoService.getContactos().subscribe();
    });;
  }
  private resetForm(){
    this.model.idContacto = 0;
    this.model.nombre = "";
    this.model.apellido = '';
    this.model.direccion = '';
    this.model.correo = '';
    this.model.telefono = 
    this.model.idCategoria = 0;
  }
  private setNotificacion(res:any){
    this.notificacion.estado = true;
    this.notificacion.mensaje = res.Mensaje;
    setTimeout(() => {
      this.resetNotificacion();
    }, 5000);
  }
  private resetNotificacion() {
    this.notificacion.mensaje = "";
    this.notificacion.estado = false;
  }
  eliminar(){
    this.contactoService.eliminarContacto(this.model.idContacto).subscribe(res => {
      this.setNotificacion(res);
      this.resetForm();
      this.contactoService.getContactos().subscribe();
    });;
  }
}
