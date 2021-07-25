import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  public timeoutID: any

  constructor(private router: Router) { }

  open(message: { title: string, text: string }, route: string, time: number = 1000) {
   
    document.querySelector<HTMLElement>('#custom-message').classList.remove('hidden');
    document.querySelector<HTMLElement>('.Message_Title').innerHTML = message.title;
    document.querySelector<HTMLElement>('.Message_Content').innerHTML = message.text;
    console.log('chegou aqui');
    
    this.timeoutID = setTimeout(() => {
      this.router.navigate([route]);
      this.close()
    }, time);
  }

  close() {
    document.querySelector('#custom-message').classList.add('hidden');
    if(this.timeoutID) {
      clearTimeout(this.timeoutID);
      this.timeoutID = null;
    }
  }
}
