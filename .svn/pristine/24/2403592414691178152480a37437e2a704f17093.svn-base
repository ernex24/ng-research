import { Component, OnInit } from '@angular/core';
import { InfoNavBarService } from '../../../shared/info-navbar.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  providers: [ InfoNavBarService ]
})
export class NoticiasComponent implements OnInit {

  Noticias = [];


  constructor( public servicio: InfoNavBarService ) { }

  ngOnInit() {

    this.Noticias = this.servicio.getNoticias();
  }

}
