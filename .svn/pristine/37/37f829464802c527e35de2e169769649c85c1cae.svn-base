import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UtilsButtonService} from '../../../core/utils-button/utils-button.service';
import { BsModalRef } from 'ngx-bootstrap';
import {BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cambiar-contrasenya',
  templateUrl: './cambiar-contrasenya.component.html',
  styleUrls: ['./cambiar-contrasenya.component.css']
})
export class CambiarContrasenyaComponent implements OnInit {

  cambiarContrasenyaForm: FormGroup;

  showPassword = false;
  showPasswordNew = false;
  showPasswordConf = false;

  constructor( private utilsButtonService: UtilsButtonService, private modalService: BsModalService, public bsModalRef: BsModalRef ) { }

  ngOnInit() {
    this.cambiarContrasenyaForm = new FormGroup({
      oldPassword: new FormControl(null, [Validators.required]),
      newPassword: new FormControl(null, [Validators.required]),
      confPassword: new FormControl(null, [Validators.required])
    });
  }

  mostrarPassword() {
    // Muestro el password anterior
    this.showPassword = this.utilsButtonService.toggleShow(this.showPassword);
  }

  mostrarNPassword() {
    // Muestro el password nuevo
    this.showPasswordNew = this.utilsButtonService.toggleShow(this.showPasswordNew);
  }

  mostrarCPassword() {
    // Muestro el password nuevo confirmado
    this.showPasswordConf = this.utilsButtonService.toggleShow(this.showPasswordConf);
  }

}
