import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plano } from '../models/plano.model';

@Injectable({
  providedIn: 'root'
})
export class PlanoService {

  private host = environment.api.host;
  private methods = environment.api.endpoints.methods.planos;
  private url = this.host + this.methods;

  private getHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
  }

  constructor(private http: HttpClient) { }

  getPlanos(): Observable<Plano[]> {    
    return this.http.get<Plano[]>(this.url);
  }
  
}
