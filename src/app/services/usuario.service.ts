import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {
  uriUsuario = 'http://localhost:3000/api/usuario/';
  usuarios: any[];

  constructor(private http: Http,private router:Router) {}

  public autenticar(usuario:any){
    let autUri = this.uriUsuario + 'autenticar/';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    })
    let data = JSON.stringify(usuario);
    this.http.post(autUri, data, options)
    .subscribe( res => {
      console.log(res.json());

      this.setToken(res.json().token);

      this.setCurrentUser({
        nick: res.json().nick,
        idUsuario: res.json().idUsuario
      });

      this.router.navigate(['/dashboard']);
    }, error => {
      console.log(error.text());
    });
  }
  public setToken(token:string){
    if(localStorage.getItem('token') != token){
      localStorage.removeItem('token');
      localStorage.setItem('token', token);
    }
  }

  public verificarSesion():boolean{
    if(localStorage.getItem('token')){
      return true;
    }else {
      return false;
    }
  }
  public setCurrentUser(usuario:any){
    localStorage.setItem('currentUser', (usuario));
    localStorage.setItem('idUsuario',usuario.idUsuario);
    console.log(localStorage.getItem('idUsuario'))
  }
  getUsuarios() {
    return this.http.get(this.uriUsuario)
      .map(res => {
        console.log("Response: " +res.json());
        this.usuarios = res.json();
      });
  }

  subirImagen(data:any){
    console.log('esta llegando')
    return this.http.post('http://localhost:3000/api/usuario/subirImagen/',data).map(res =>{
      console.log(res.json());
    });
  }

}
