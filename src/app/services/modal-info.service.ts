import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class ModalInfoService {

  private _ocultarModal: Boolean = true;
  public tipo!: string;
  public name!:string;
  public precio!:number;
  public id!: string;
  public img!: string;

  get ocultarModal(){
    return this._ocultarModal;
  }

  abrirModal( tipo:'productos', id: string, img: string = '', name:string, precio:number ){
    this._ocultarModal = false;
    this.name = name;
    this.precio = precio;
    this.tipo = tipo;
    this.id = id;
    if ( img.includes('https') ){
      this.img = img;
    } else {
      this.img = `${ base_url }/upload/${ tipo }/${ img }`
    }
  }

  cerrarModal(){
    this._ocultarModal = true;
  }

  constructor() { }
}
