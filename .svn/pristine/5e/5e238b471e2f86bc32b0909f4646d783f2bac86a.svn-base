import { Component, OnInit } from '@angular/core';
import { InfoNavBarService } from '../../shared/info-navbar.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
  providers: [ InfoNavBarService ]
})
export class FavoritosComponent implements OnInit {

  favoritos = [];

  constructor( public servicio: InfoNavBarService ) {}

  ngOnInit() {
    this.favoritos = this.servicio.getFavoritos();
  }
}
