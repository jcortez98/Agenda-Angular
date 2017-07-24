import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactoService {
  uri = 'http://localhost:3000/api/contacto/';
  contactos:Array<any> = [];
  historial:Array<any> = [];
  
  constructor(private http: Http,private router:Router) {}
  getContactos() {
    let usuario = localStorage.getItem('idUsuario')
    let uri2 = this.uri + usuario;
    return this.http.get(uri2).map(response=>{
            this.contactos=response.json();
      });
  }
  getHistorial(){
    let idUsuario = localStorage.getItem('idUsuario');
    return this.http.get('http://localhost:3000/api/historial/'+idUsuario).map(response => {
      this.historial = response.json();
    })
  }
  addContacto(data:any){
    let json = JSON.stringify(data);
    let final = JSON.parse(json);
    console.log(json);
    return this.http.post(this.uri,final).map(res => {
      return res.json();
    });
  }

  updateContacto(data:any){
    let json = JSON.parse(JSON.stringify(data));
    return this.http.put(this.uri+data.idContacto, json).map(res => {
      return res.json();
    });
  }

  eliminarContacto(id:any){
    return this.http.delete(this.uri+id).map(res => {
      return res.json();
    });
  }

}
