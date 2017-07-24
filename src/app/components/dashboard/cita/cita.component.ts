import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../../services/cita.service';
import { ContactoService } from '../../../services/contacto.service'

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {
  private model = {
    idCita: 0,
    fecha: '',
    descripcion: '',
    idUsuario: localStorage.getItem('idUsuario'),
    idContacto: 0,
    lugar: '',
    nombre: '',
    apellido: ''
  }
  constructor(private citaService:CitaService, private contactoService:ContactoService) { }

  ngOnInit() {
    this.citaService.getCitas().subscribe();
    this.contactoService.getContactos().subscribe();
  }

  private agregar() {
    this.citaService.addCita(this.model).subscribe(res => {
      this.resetForm();
      this.citaService.getCitas().subscribe();
    });
  }

  private editar() {
    this.citaService.updateCita(this.model).subscribe(res => {
      this.resetForm();
      this.citaService.getCitas().subscribe();
    })
  }

  private eliminar() {
    this.citaService.eliminarCita(this.model.idCita).subscribe(res => {
      this.resetForm();
      this.citaService.getCitas().subscribe();
    })
  }

  private cargar(data:any) {
    this.model.idCita = data.idCita;
    this.model.fecha = data.fecha;
    this.model.descripcion = data.descripcion;
    this.model.idContacto = data.idContacto;
    this.model.lugar = data.lugar;
    this.model.nombre = data.nombre;
    this.model.apellido = data.apellido;
  }

  private resetForm() {
    this.model.idCita = 0;
    this.model.fecha = '';
    this.model.descripcion = '';
    this.model.idContacto = 0;
    this.model.lugar = '';
  }

}
