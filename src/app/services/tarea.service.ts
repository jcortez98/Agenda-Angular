import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class TareaService {
  uri = 'http://localhost:3000/api/tarea/';
  tareas:Array<any> = [];
  prioridades:Array<any> = [];
  
  constructor(private http: Http,private router:Router) {}
  getTareas() {
    let usuario = localStorage.getItem('idUsuario')
    let uri2 = this.uri + usuario;
    return this.http.get(uri2).map(response=>{
            this.tareas=response.json();
      });
  }
  getPrioridades(){
    return this.http.get('http://localhost:3000/api/prioridad/').map(response => {
      this.prioridades = response.json();
    })
  }
  addTarea(data:any){
    let json = JSON.stringify(data);
    let final = JSON.parse(json);
    console.log(json);
    return this.http.post(this.uri,final).map(res => {
      return res.json();
    });
  }

  updateTarea(data:any){
    let json = JSON.parse(JSON.stringify(data));
    return this.http.put(this.uri+data.idTarea, json).map(res => {
      return res.json();
    });
  }

  eliminarTarea(id:any){
    return this.http.delete(this.uri+id).map(res => {
      return res.json();
    });
  }

}
