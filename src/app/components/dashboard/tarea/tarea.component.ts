import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';
import { TareaService } from '../../../services/tarea.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  private model = {
    idTarea: 0,
    descripcion: '',
    nombre: '',
    fecha: '',
    idUsuario: localStorage.getItem('idUsuario'),
    idCategoria: 0,
    idPrioridad: 0,
    nombrePrioridad: '',
    nombreCategoria: ''
  }
  constructor(private categoriaService:CategoriaService, private tareaService:TareaService) { }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe();
    this.tareaService.getPrioridades().subscribe();
    this.tareaService.getTareas().subscribe();
  }

  private cargar(data:any){
    this.model.idTarea = data.idTarea;
    this.model.descripcion = data.descripcion;
    this.model.nombre = data.nombre;
    this.model.fecha = data.fecha;
    this.model.idCategoria = data.idCategoria;
    this.model.idPrioridad = data.idPrioridad;
    this.model.nombrePrioridad = data.nombrePrioridad;
    this.model.nombreCategoria = data.nombreCategoria;
  }
  private editar(){
    this.tareaService.updateTarea(this.model).subscribe(res =>{
      this.tareaService.getTareas().subscribe();
      this.resetForm();
    });
  }

  private agregar(){
    this.tareaService.addTarea(this.model).subscribe(res =>{
      this.tareaService.getTareas().subscribe();
      this.resetForm();
    });
  }

  private eliminar(){
    this.tareaService.eliminarTarea(this.model.idTarea).subscribe(res => {
      this.tareaService.getTareas().subscribe();
      this.resetForm();
    });
  }

  private resetForm(){
    this.model.idTarea = 0;
    this.model.descripcion = '';
    this.model.nombre = '';
    this.model.fecha = '';
    this.model.idCategoria = 0;
    this.model.idPrioridad = 0;
    this.model.nombreCategoria = '';
    this.model.nombrePrioridad = '';
  }

}
