import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-ligthboxes-default',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.scss']
})
export class PopupMessageComponent implements OnInit {

  constructor(private service: PopupService) {}

  ngOnInit() {}
  
  close() {
    this.service.close()
  }

}