import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrl: './alumnos-form.component.scss'
})
export class AlumnosFormComponent {
 alumnosForm: FormGroup;

 @Output()
 alumnossubmitted = new EventEmitter();

 constructor(private fb: FormBuilder){
  this.alumnosForm = this.fb.group({
    nombre:this.fb.control('' , Validators.required),
    apellido:this.fb.control('' ,Validators.required),
    dni:this.fb.control('' ,Validators.required),
    fecha:this.fb.control('' ,Validators.required),
    correo:this.fb.control('' ,Validators.required,),
    contraseña:this.fb.control('' ,Validators.required),
    curso:this.fb.control('' ,Validators.required),
    
  })
 }
 onSubmit(): void{
  console.log(this.alumnosForm.value);
  this.alumnossubmitted.emit(this.alumnosForm.value)
 
 }
}
