import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataStorageService} from '../../../shared/data-storage.service';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-cambiar-email',
  templateUrl: './cambiar-email.component.html',
  styleUrls: ['./cambiar-email.component.css']
})
export class CambiarEmailComponent implements OnInit {

  cambiarEmail: FormGroup;
  email: string;
  constructor( private dataStorageService: DataStorageService, public bsModalRef: BsModalRef ) { }

  ngOnInit() {
    this.cambiarEmail = new FormGroup({
      emailConf: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required])
    });

    this.email = this.dataStorageService.sesion.email;
}

}
