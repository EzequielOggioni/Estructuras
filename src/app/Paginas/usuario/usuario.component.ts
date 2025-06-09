import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  public miForm :FormGroup;
  constructor(private fb: FormBuilder ) {
     this.miForm = this.fb.group({
      'nombre': ['', [Validators.required, Validators.maxLength(10)]]
    });
    
  }
  
  aceptar() {

    console.log(this.miForm.getRawValue());
  }

}
