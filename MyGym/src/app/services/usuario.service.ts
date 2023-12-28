import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

import SimpleCrypto from "simple-crypto-js"
import { IUsuario } from './../models/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private host = environment.api.host;
  private methods = environment.api.endpoints.methods.usuarios;
  private url = this.host + this.methods;

  private getHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
  }
  
  constructor(private http: HttpClient, private router: Router) { }

  encryptValue(value) {
    let simpleCrypto = new SimpleCrypto("%Rq|]FWd>:bnUo%{r)6pI8!xW34SI)8;BQ;>WLZSJ07fGmXyX]Eg3%");
    return simpleCrypto.encrypt(value);
  }
  
  decryptValue(value) {
    let simpleCrypto = new SimpleCrypto("%Rq|]FWd>:bnUo%{r)6pI8!xW34SI)8;BQ;>WLZSJ07fGmXyX]Eg3%");
    return simpleCrypto.decrypt(value)
  }  

  getToken() {
    return sessionStorage.getItem('token'); 
  }

  getUsers(): Observable<IUsuario[]> {    
    return this.http.get<IUsuario[]>(this.url);
  }

  getUserById(id: string): Observable<IUsuario> {
    if(!this.getToken()) return;    

    return this.http.get<IUsuario>(`${this.url}/${this.decryptValue(id)}`);
  }

  saveUser(user: IUsuario): Observable<IUsuario> {    
    if(!this.getToken()) return;

    return this.http.post<IUsuario>(this.url, JSON.stringify(user), { headers: this.getHeader() })
  }

  updateUser(user: IUsuario): Observable<IUsuario> {    
    if(!this.getToken()) return;

    return this.http.put<IUsuario>(`${this.url}/${user.id}`, JSON.stringify(user), { headers: this.getHeader() });
  }

  deleteUser(user: IUsuario) {    
    if(!this.getToken()) return;

    return this.http.delete<IUsuario>(`${this.url}/${user.id}`, { headers: this.getHeader() })
  }

  logout() {
    this.router.navigate(['/login']);
    sessionStorage.clear();
  }
}
