import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class CitaService {
  uri = 'http://localhost:3000/api/cita/';
  citas:Array<any> = [];
  
  constructor(private http: Http,private router:Router) {}
  getCitas() {
    let usuario = localStorage.getItem('idUsuario')
    let uri2 = this.uri+'user/'+ usuario;
    return this.http.get(uri2).map(response=>{
            this.citas=response.json();
      });
  }

  addCita(data:any){
    let json = JSON.stringify(data);
    let final = JSON.parse(json);
    console.log(json);
    return this.http.post(this.uri,final).map(res => {
      return res.json();
    });
  }

  updateCita(data:any){
    let json = JSON.parse(JSON.stringify(data));
    return this.http.put(this.uri+data.idContacto, json).map(res => {
      return res.json();
    });
  }

  eliminarCita(id:any){
    return this.http.delete(this.uri+id).map(res => {
      return res.json();
    });
  }

}
