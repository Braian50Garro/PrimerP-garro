import { Component } from '@angular/core';
import { alumnos } from './curso';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent {
  displayedColumns: string[] = ['id','nombre','apellido','email','curso'];

  dataSource :alumnos[] =[
    {
    id:1,
    nombre:'Gabriel',
    apellido: 'Sanchez',
    email:'Gabi@Mail.com',
    contraseña:'321654',
    curso:'Naturales'
},
{
  id:2,
  nombre:'Sandra',
  apellido:'Perez',
  email:'Perez@Mail.com',
  contraseña:'321654',
  curso:'Sociales'
}];
// esto no lo pude lograr!
onalumnosSubmitted(ev:alumnos): void{
//this.dataSource.push(ev);
this.dataSource = [...this.dataSource,ev];
}

}

