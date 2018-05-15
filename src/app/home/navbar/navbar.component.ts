///<reference path="../../core/utils-button/utils-button.service.ts"/>
import {Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap';
import {LogOutComponent} from './log-out/log-out.component';
import {CambiarEmailComponent} from './cambiar-email/cambiar-email.component';
import {CambiarContrasenyaComponent} from './cambiar-contrasenya/cambiar-contrasenya.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  bsModalRef: BsModalRef;

  private wasInside = true;

  abreNavbar = true;
  abreMenuPerfil = true;

  nombre: string;
  empresa: string;


  id: string;
  token: string;

  private config = {
    animated: false,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false,
  };

  informeNav = false;
  recomendacionesNav = false;
  favoritosNav = false;
  dividendosNav = false;

  setNavClasses() {
    const iconosCss = {
    informeNavTitle: this.informeNav,
    recomendacionesNavTitle: this.recomendacionesNav,
    favoritosNavTitle: this.favoritosNav,
    dividendosNavTitle: this.dividendosNav
    };
    return iconosCss;
  }

  constructor(private dataStorageService: DataStorageService,
              private router: Router,
              private modalService: BsModalService,
              private activatedRoute: ActivatedRoute ) {

    // Cambiar el icono y el nombre en la barra de menu superior según la dirección de la ruta
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        if (this.router.url === '**' || this.router.url.includes('/home/informes')) {
            this.informeNav = true;
            this.recomendacionesNav = false;
            this.favoritosNav = false;
            this.dividendosNav = false;
            console.log('estoy en informes');
        } else if (this.router.url.includes ('/home/recomendaciones')) {
            this.informeNav = false;
            this.recomendacionesNav = true;
            this.favoritosNav = false;
            this.dividendosNav = false;
            console.log('estoy en recomendaciones');
        } else if (this.router.url.includes ('/home/dividendos')) {
            this.informeNav = false;
            this.recomendacionesNav = false;
            this.favoritosNav = false;
            this.dividendosNav = true;
            console.log('estoy dividendos');
        } else if (this.router.url.includes ('/home/favoritos')) {
            this.informeNav = false;
            this.recomendacionesNav = false;
            this.favoritosNav = true;
            this.dividendosNav = false;
            console.log('estoy favoritos');
        }
      }
    });
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.queryParams['id'];
    this.token = this.activatedRoute.snapshot.queryParams['token'];

    this.nombre = this.dataStorageService.sesion.nombre;
    this.empresa  = this.dataStorageService.sesion.descripcionEmpresa;
  }

  //  Abrir Modal Log Out para salir de la aplicación
  openModalSalir() {
    this.bsModalRef = this.modalService.show( LogOutComponent, this.config );
  }

  // Abre modal para cambiar email asociado
  cambiarMail() {
    this.bsModalRef = this.modalService.show( CambiarEmailComponent, this.config );
  }

  // Abre modal para cambiar la contraseña
  cambiarContrasenya() {
    this.bsModalRef = this.modalService.show( CambiarContrasenyaComponent, this.config );
  }

 // Escucha los clicks dentro de el componente
  @HostListener ('click')
  clickInside() {
    this.wasInside = true;
  }

  // Cierra el menu si se hace click afuera del componente
  @HostListener ('document:click')
  clickout() {
    if (!this.wasInside) {
      if (!this.abreNavbar) {
        this.abreNavbar = true;
      }
    }
    this.wasInside = false;
  }

}







