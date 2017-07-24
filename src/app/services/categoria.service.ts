import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriaService {
  uri = 'http://localhost:3000/api/categoria/';
  categorias:Array<any> = [];

  constructor(private http: Http,private router:Router) {}
  getCategorias() {
    let usuario = localStorage.getItem('idUsuario')
    let uri2 = this.uri + 'user/' +usuario;
    return this.http.get(uri2).map(response=>{
            this.categorias=response.json();
      });
      
  }
  insertCategoria(nombre:string){
      //var options = new RequestOptions({headers: new Headers({"Content-Type":"application/json","Authorization":"token"})})
      return this.http.post(this.uri,
      {
          nombreCategoria: nombre,
          idUsuario: localStorage.getItem('idUsuario')
      }).map(res=>{
          console.log(res.json())
          return res.json();
      })
  }
  updateCategoria(data:any){
      return this.http.put(this.uri+data.idCategoria, {
          nombreCategoria: data.nombreCategoria,
          idCategoria: data.idCategoria
      }).map( res => {
          console.log(res.json());
          return res.json();
      })
  }
  eliminarCategoria(id){
      return this.http.delete(this.uri+id).map(res => {
          console.log(res.json());
          return res.json();
      })
  }
}