import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './componets/estudiantes/estudiantes.component';
import { CursosComponent } from './componets/cursos/cursos.component';
import { RegistroComponent } from './componets/registro/registro.component';
import { SetestudianteComponent } from './componets/setestudiante/setestudiante.component';
import { SetcursosComponent } from './componets/setcursos/setcursos.component';
import { SetregistroComponent } from './componets/setregistro/setregistro.component';

const routes: Routes = [
  {path:"Estudiantes",component:EstudiantesComponent},
  {path:"Cursos",component:CursosComponent},
  {path:"Registro",component:RegistroComponent},
  {path:"SetEstudiantes",component:SetestudianteComponent},
  {path:"SetCursos",component:SetcursosComponent},
  {path:"SetRegistro",component:SetregistroComponent},
  {path:"**",redirectTo:"Estudiantes",pathMatch:"full"},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
