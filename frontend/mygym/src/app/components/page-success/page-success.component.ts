import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-success',
  templateUrl: './page-success.component.html',
  styleUrls: ['./page-success.component.css']
})
export class PageSuccessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeToLogin() {
    this.router.navigate(['/login']);
  }
}
