import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import {MatTableModule} from '@angular/material/table';
import { AlumnosFormComponent } from './components/alumnos-form/alumnos-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../../../core/services/users.service';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    AlumnosComponent,
    AlumnosFormComponent
  ],
  imports: [
    CommonModule,MatTableModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule,ReactiveFormsModule,MatIconModule,
  ],
  exports:[AlumnosComponent],
  providers:[
    UsersService
  ]
})
export class AlumnosModule { }
