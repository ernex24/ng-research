import { Component, OnInit } from '@angular/core';
import { InfoNavBarService } from '../../../shared/info-navbar.service';

@Component({
  selector: 'app-ultimos-eventos',
  templateUrl: './ultimos-eventos.component.html',
  styleUrls: ['./ultimos-eventos.component.css'],
  providers: [ InfoNavBarService ]
})
export class UltimosEventosComponent implements OnInit {

  ultimosEventos = [];

  constructor( public servicio: InfoNavBarService ) {}

  ngOnInit() {
    this.ultimosEventos = this.servicio.getUltimosEventos();
  }

}
