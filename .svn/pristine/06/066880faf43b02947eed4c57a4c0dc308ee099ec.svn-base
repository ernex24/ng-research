import { Component, OnInit } from '@angular/core';
import { InfoNavBarService } from '../../../shared/info-navbar.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ InfoNavBarService ]
})
export class BlogComponent implements OnInit {

  Blogarticulos = [];

  constructor( public servicio: InfoNavBarService ) {}

  ngOnInit() {
    this.Blogarticulos = this.servicio.getBlogarticulos();
  }

}
