import { Component, OnInit } from '@angular/core';
import{NgForm} from "@angular/forms"
import { CategoriaService } from "../../../services/categoria.service"

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styles: []
})
export class CategoriaComponent implements OnInit {
  private model = {
    idCategoria: 0,
    nombreCategoria: ''
  }
  constructor(private _categoriaS:CategoriaService) { }

  ngOnInit() {
    this._categoriaS.getCategorias().subscribe();
  }

  private cargar(data:any){
    console.log('aquiestoy');
    this.model.idCategoria = data.idCategoria;
    this.model.nombreCategoria = data.nombreCategoria;
  }

  private agregarCategoria(data:NgForm){
    if(data.valid){
      this._categoriaS.insertCategoria(data.value.nombre).subscribe(res => {
        this._categoriaS.getCategorias().subscribe();
      })
    }else{
      alert("No esta completo el campo Nombre")
    }
  }

  private editar(){
    this._categoriaS.updateCategoria(this.model).subscribe(res => {
      this.resetFormulario();
      this._categoriaS.getCategorias().subscribe();
    });
  }

  private resetFormulario() {
    this.model.idCategoria = 0;
    this.model.nombreCategoria = '';
  }
  
  private eliminar(){
    this._categoriaS.eliminarCategoria(this.model.idCategoria).subscribe(res => {
      this.resetFormulario();
      this._categoriaS.getCategorias().subscribe();
    });
  }

}
