///<reference path="../../../../../node_modules/@angular/router/src/router.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import {DataStorageService} from '../../../shared/data-storage.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor( private router: Router,
               private dataStorageService: DataStorageService,
               public bsModalRef: BsModalRef ) { }


  // Confirmar si salir de la aplicación
  confirm(): void {
    this.bsModalRef.hide();
    this.onLogOut();
  }

  decline(): void {
    this.bsModalRef.hide();
  }

  onLogOut() {
    this.dataStorageService.sesion = null;
    this.router.navigate(['/acceso/login']);
  }

  ngOnInit() {
  }

}
