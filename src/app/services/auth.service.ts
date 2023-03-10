import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { environment } from 'src/environments/environment';

import { AuthResponse, Usuario } from '../auth/interface/interface';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string =environment.baseUrl;
  private _usuario!: Usuario;

  get usuario(){
    return {...this._usuario};
  }

  constructor(private http: HttpClient) { }

  registro( name: string, email: string, password: string ){
    const url = `${ this.baseUrl }/usuarios/register`;
    const body = { email, password, name };
    return this.http.post<AuthResponse>(url, body)
    .pipe(
      tap(({ ok, token }) => {
        if( ok ){
          localStorage.setItem("token", token!);
        }
      }),
      map(resp => resp.ok),
      catchError( err => of(err.error.msg) )
    )
  }

  login( email: string, password: string ){
    const url = `${ this.baseUrl }/usuarios/login`;
    const body = { email, password };
    return this.http.post<AuthResponse>(url, body)
    .pipe(
      tap(({ ok, token }) => {
        if( ok ){
          localStorage.setItem("token", token!);
        }
      }),
      map(resp => resp.ok),
      catchError( err => of(err.error.msg) )
    )
  }


  validarToken(): Observable<boolean>{
    const url = `${ this.baseUrl }/usuarios/renew`;
    const headers = new HttpHeaders().set("x-token",localStorage.getItem("token") || "");

    return this.http.get<AuthResponse>( url, { headers } )
      .pipe(
        map( resp => {
          localStorage.setItem("token", resp.token!);
          this._usuario = {
            name: resp.name!,
            uid: resp.uid!,
            email: resp.email!
          }
          return resp.ok;
        }),
        catchError(err => of(false))
      );
  }

  logout(){
    localStorage.removeItem("token");
  }

}
