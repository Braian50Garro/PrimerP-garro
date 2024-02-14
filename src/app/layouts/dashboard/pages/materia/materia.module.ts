import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriaRoutingModule } from './materia-routing.module';
import { MateriaComponent } from './materia.component';
import {MatTableModule} from '@angular/material/table';
import { MateriaService } from './materia.service';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    MateriaComponent
  ],
  imports: [
    CommonModule,
    MateriaRoutingModule,
    MatTableModule,
    MatButtonModule,
  ],
  providers:[MateriaService],
})
export class MateriaModule { }
