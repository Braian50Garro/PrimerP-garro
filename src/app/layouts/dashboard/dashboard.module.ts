import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AlumnosModule } from './pages/alumnos/alumnos.module';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { MateriaComponent } from './pages/materia/materia.component';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,MatSidenavModule,MatButtonModule,MatToolbarModule,MatIconModule,AlumnosModule,MatListModule,
    RouterModule.forChild([
      {
        path:'inicio',
        component:InicioComponent
        }
        ,
        {
        path: 'materia',
        loadChildren:()=>
        import('./pages/materia/materia.module').then(
          (m) => m.MateriaModule
        ),
        },
        {
        path:'alumnos',
        component:AlumnosComponent
        },
        {
          path:'**',
          redirectTo:'inicio',
        },

       
    ]),
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
