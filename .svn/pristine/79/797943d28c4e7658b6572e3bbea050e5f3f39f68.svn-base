import { Component, OnInit } from '@angular/core';
import { InfoNavBarService } from '../../../shared/info-navbar.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
  providers: [ InfoNavBarService ]

})
export class EventosComponent implements OnInit {

  eventos = [];

  constructor( public servicio: InfoNavBarService ) {}

  ngOnInit() {
    this.eventos = this.servicio.getEventos();
  }

}
