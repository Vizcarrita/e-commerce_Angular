import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent  {

  public fondo?:string;

  get usuario(){
    return this.authService.usuario;
  }

  constructor(private router: Router,
              private authService: AuthService ) { }

  logout(){
    this.router.navigateByUrl("/auth");
    this.authService.logout();
  }



}
