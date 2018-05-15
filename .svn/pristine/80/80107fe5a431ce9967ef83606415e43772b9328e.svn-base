import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  informes = false;
  recomendaciones = false;
  dividendos = false;
  favoritos = false;
  id: string;
  token: string;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        if (this.router.url === '**' || this.router.url.includes('/home/informes')) {
            this.informes = true;
            this.recomendaciones = false;
            this.dividendos = false;
            this.favoritos = false;
          console.log('estoy en informes');
        } else if (this.router.url.includes('/home/recomendaciones')) {
            this.informes = false;
            this.recomendaciones = true;
            this.dividendos = false;
            this.favoritos = false;
            console.log('estoy en recomendaciones');

        } else if (this.router.url.includes('/home/dividendos')) {
            this.informes = false;
            this.recomendaciones = false;
            this.dividendos = true;
            this.favoritos = false;
          console.log('estoy en dividendos');

        } else if (this.router.url.includes('/home/favoritos')) {
            this.informes = false;
            this.recomendaciones = false;
            this.dividendos = false;
            this.favoritos = true;
          console.log('estoy en favoritos');
          }
      }
     });
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.queryParams['id'];
    this.token = this.activatedRoute.snapshot.queryParams['token'];
  }

  setClasses() {
    const classes =  {
      informesh: this.informes,
    };
    return classes;
  }

  setClasses2() {
    const classes =  {
      recomendacionesh: this.recomendaciones,
    };
    return classes;
  }

  setClasses3() {
    const classes =  {
      dividendosh: this.dividendos,
    };
    return classes;
  }

  setClasses4() {
    const classes =  {
      favoritosh: this.favoritos,
    };
    return classes;
  }
}
