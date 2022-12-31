import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ModalInfoService {

  private _ocultarModal: Boolean = true;

  get ocultarModal(){
    return this._ocultarModal;
  }

  abrirModal(){
    this._ocultarModal = false;
  }

  cerrarModal(){
    this._ocultarModal = true;
  }

  constructor() { }
}
