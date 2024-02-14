import { Component } from '@angular/core';
import { alumnos } from './curso';
import { UsersService } from '../../../../core/services/users.service';




@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent {
  displayedColumns: string[] = ['id','nombre','apellido','email','curso','accion',];

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

constructor(private usersService: UsersService){}

onDeleteUser(ev:alumnos): void{
  //this.loadingService.setIsLoading(true)
  //this.usersService.

}




// esto no lo pude lograr!
onalumnosSubmitted(ev:alumnos): void{
//this.dataSource.push(ev);
this.dataSource = [...this.dataSource,ev];
}

}



