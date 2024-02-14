import { Injectable } from "@angular/core";
import { of } from "rxjs";
import {materia } from "./models"; // Asegúrate de que 'Materias' sea el nombre correcto del tipo

@Injectable()
export class MateriaService {

  getMaterias() {
    const materia: materia[] = [
      {
        id: 1,
        nombre: 'Andres',
        apellido: 'Gonzalez',
        createdAt: new Date()
      },
      {
        id: 2,
        nombre: 'Carla',
        apellido: 'Perez',
        createdAt: new Date()
      },
      {
        id: 3,
        nombre: 'Pedro',
        apellido: 'Rodriguez',
        createdAt: new Date()
      },
      {
        id: 4,
        nombre: 'Luis',
        apellido: 'Garcia',
        createdAt: new Date()
      }
    ];
    return of(materia);
  }
}


