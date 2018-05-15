import {Component, OnInit} from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { InfoNavBarService } from '../../shared/info-navbar.service';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css'],
  providers: [ InfoNavBarService, { provide: CarouselConfig, useValue: { interval: 0, noPause: true, showIndicators: true } }
  ],
})
export class InformesComponent implements OnInit {

  menuCollapsed = false;
  compania: string;
  sector: string;
  informe: string;

  titulodeLista: string;

  listaEmpresas = [];
  listaSectores = [];
  listaInformes = [];
  ListaDeInformes = [];

// Calendario
  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);
  bsValue: Date = new Date();


  constructor( public servicio: InfoNavBarService ) {}

  ngOnInit () {
    // Trae los json del servicio para lenar los dropdowns
    this.listaEmpresas = this.servicio.getEmpresas();
    this.listaSectores = this.servicio.getSectores();
    this.listaInformes = this.servicio.getInformes();
    this.ListaDeInformes = this.servicio.getListaDeInformes();
  }

  // Muestra el sector seleccionado en el boton de selección
  sectorSeleccionado(item) {
    this.sector = item;
  }

  // Muestra la compañia seleccionada en el boton de selección
  companiaSeleccionada(item) {
    this.compania = item;
  }

  // Muestra el tipo de informe seleccionado en el boton de selección
  informeSeleccionado(item) {
    this.informe = item;
  }
}
