import { Component } from '@angular/core';
import { MateriaService } from './materia.service';
import { materia } from './models';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.scss']
})
export class MateriaComponent {
  displayedColumns = ['id', 'nombre', 'apellido', 'createdAt', 'accion'];

materias:materia[]=[]

  constructor(private MateriaService: MateriaService) {
    this.MateriaService.getMaterias().subscribe({
      next:(materias) =>{
        this.materias=materias;

      }
    })

   } 
}
