import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

import { environment } from 'src/environments/environment';
import { PaginarProducto } from '../productos/interface/paginar-productos.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private readonly API = environment.baseUrl;
  constructor( private http: HttpClient ) { }

  get token(): string{
    return localStorage.getItem('token') || '';
  }

  get headers(){
    return {
      headers:{
        'x-token':this.token
      }
    }
  }

  addNewProducto(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>(`${this.API}/productos`, producto, this.headers);
  }
  getProductos( desde: number = 0 ){
    const url = `${this.API}/productos?desde=${ desde }`;
    return this.http.get<PaginarProducto>(url, this.headers);
  }
  getProductoPorId(_id: string):Observable<Producto>{
    return this.http.get<Producto>(`${this.API}/productos/${_id}`)
  }
  updateProducto(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(`${this.API}/productos/${ producto._id }`, producto, this.headers );
  }
  deleteProducto(_id: string): Observable<Producto>{
    return this.http.delete<Producto>(`${this.API}/productos/${ _id }`, this.headers );
  }
}