import { UtilsAccesoService } from '../../core/utils-acceso/utils-acceso.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilsButtonService } from '../../core/utils-button/utils-button.service';
import { ValidarUsuarioService } from './validar-usuario.service';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-validar-usuario',
  templateUrl: './validar-usuario.component.html',
  styleUrls: ['./validar-usuario.component.css']
})

export class ValidarUsuarioComponent implements OnInit, OnDestroy {
  validarUsuarioForm: FormGroup;
  numero1: number;
  numero2: number;
  showPassword = false;
  showPasswordConfirmar = false;
  isServidorRest = false;
  submited$: Observable<boolean>;
  errorMessageDescripcion = '';
  private subscriptionValidarUsuario: Subscription;
  private subscriptionRestServer: Subscription;
  idioma: string;
  id_link: string;

  constructor(private translate: TranslateService,
              private utilsButtonService: UtilsButtonService,
              private dataStorageService: DataStorageService,
              private utilsAccesoService: UtilsAccesoService,
              private validarUsuarioService: ValidarUsuarioService,
              private state: Router) { }

  ngOnInit() {
    // Gestion del form
    this.validarUsuarioForm = new FormGroup({
      'passwordNew': new FormControl(null, [Validators.required]),
      'passwordConf': new FormControl(null, [Validators.required]),
      'resultado': new FormControl(null, [Validators.required])
    });

    // Me subscribo al dato para recuperar el servidor
    this.subscriptionRestServer = this.dataStorageService.getRestServers().subscribe(
      (resultado: boolean) => {
        this.isServidorRest = resultado;
        // Si KO --> muestro el error
        if (!resultado) {
          this.translate.get('Comun.ErrorPeticion', {server: 'Recuperar servidor'}).subscribe(
            msg => {
              this.errorMessageDescripcion = msg;
            });
        }
      }
    );

    // Inicializamos los digitos para el captcha
    this.actualizarNumeros();

    // Recuperamos los parametros de la URL
    this.idioma = this.state.routerState.snapshot.root.queryParams['idioma'];
    this.id_link = this.state.routerState.snapshot.root.queryParams['link'];

    // Escucho el submit del boton
    this.submited$ = this.utilsButtonService.submitedButtonChanged;

    // Escuchamos la peticion al Servicio
    this.subscriptionValidarUsuario = this.validarUsuarioService.errorMessageDescripcionChanged.subscribe(
      (error: string) => {
        this.errorMessageDescripcion = error;
        // Actualizamos con los numeros de la operacion para el captcha
        this.actualizarNumeros();
      });
  }

  private actualizarNumeros(): void {
    this.numero1 = this.utilsAccesoService.actualizarNumero();
    this.numero2 = this.utilsAccesoService.actualizarNumero();
  }

  onToggleShow() {
    // Muestro el password
    this.showPassword = this.utilsButtonService.toggleShow(this.showPassword);
  }

   onToggleShowconf() {
    // Muestro el password
    this.showPasswordConfirmar = this.utilsButtonService.toggleShow(this.showPasswordConfirmar);
  }

  onSubmit() {
    // Inicializo los mensajes de error
    this.errorMessageDescripcion = '';
    // Deshabilito el boton
    this.utilsButtonService.submitedButtonChanged.next(true);
    if (this.validar()) {
      // LLamamos al servicio de activar usuario
      this.validarUsuarioService.validarUsuario(this.validarUsuarioForm.value.passwordNew, this.id_link, this.idioma);
    }
  }

  private validar(): boolean {
    let result = true;

    // Comprobamos el resultado del captcha y si las contraseñas son iguales
    if (this.validarUsuarioForm.value.passwordNew !==  this.validarUsuarioForm.value.passwordConf ||
      this.validarUsuarioForm.value.resultado !== this.numero1 + this.numero2) {
      // Actualizamos con los numeros de la operacion para el captcha
      this.actualizarNumeros();

      if (this.validarUsuarioForm.value.passwordNew !== this.validarUsuarioForm.value.passwordConf) {
        // Las contraseñas no son iguales
        this.translate.get('ValidarUsuarioComponent.ContrasenyaIncorrecta').subscribe(
          mensaje => {
            // Informamos el error de Resultado Incorrecto
            this.errorMessageDescripcion = mensaje;
          }
        );
        result = false;
      } else if (this.validarUsuarioForm.value.resultado !== this.numero1 + this.numero2) {

        // Resultado incorrecto del Captcha
        this.translate.get('ValidarUsuarioComponent.ResultadoIncorrecto').subscribe(
          mensaje => {
            // Informamos el error de Resultado Incorrecto
            this.errorMessageDescripcion = mensaje;
          }
        );
        result = false;
      }
    }
    // Habilito el boton
    this.utilsButtonService.submitedButtonChanged.next(false);
    return result;
  }

  ngOnDestroy(): void {
    this.subscriptionRestServer.unsubscribe();
    this.subscriptionValidarUsuario.unsubscribe();
  }
}
