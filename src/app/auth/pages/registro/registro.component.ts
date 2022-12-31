import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  registroForm: FormGroup = this.fb.group({
    name:["",[Validators.required]],
    email:["",[Validators.required, Validators.pattern(this.emailPattern)]],
    password:["",[Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  registro(){
    const { name, email, password } = this.registroForm.value;
            
     this.authService.registro(name, email, password).subscribe(ok => {
       if(ok === true){
          this.router.navigateByUrl("/productos/listado");
       }else{
          Swal.fire("Error",ok, "error");
       }
       this.registroForm.markAllAsTouched();
     });
  }
            
  campoNoValido(campo:string){
    return this.registroForm.get(campo)?.invalid 
    && this.registroForm.get(campo)?.touched;
  };
}
