import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  private isAuthenticated: boolean = true;

  canActivate() {
    if(sessionStorage.getItem('token') === null) {
      this.router.navigate(['/login']);
      sessionStorage.clear();
      
      return false;
    }
    else {
      return this.isAuthenticated;
    }  
  }
  
}
