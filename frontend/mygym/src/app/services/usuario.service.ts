import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

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

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUsuario[]> {    
    return this.http.get<IUsuario[]>(this.url);
  }

  getUserById(id: number): Observable<IUsuario> {
    return this.http.get<IUsuario>(`${this.url}/${id}`);
  }

  saveUser(user: IUsuario): Observable<IUsuario> {    
    return this.http.post<IUsuario>(this.url, JSON.stringify(user), { headers: this.getHeader() })
    .pipe(retry(1));
  }

  updateUser(user: IUsuario): Observable<IUsuario> {    
    return this.http.put<IUsuario>(`${this.url}/${user.id}`, JSON.stringify(user), { headers: this.getHeader() });
  }

  deleteUser(user: IUsuario) {    
    return this.http.delete<IUsuario>(`${this.url}/${user.id}`, { headers: this.getHeader() })
  }
}
