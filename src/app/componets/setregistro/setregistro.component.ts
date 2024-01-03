import { Component, OnInit } from '@angular/core';
import { ICursos } from 'src/app/interface/cursos';
import { IEstudiantes } from 'src/app/interface/estudiantes';
import { ISetRelacion } from 'src/app/interface/registro';
import { RegistroService } from 'src/app/services/registro.service';
import { EstudiantesComponent } from '../estudiantes/estudiantes.component';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-setregistro',
  templateUrl: './setregistro.component.html',
  styleUrls: ['./setregistro.component.css']
})
export class SetregistroComponent implements OnInit {

  public registro :any[]=[]
  public estudiantes: IEstudiantes[]=[]
  public cursos: ICursos[]=[]
  public estudianteSelected: IEstudiantes={
    idEstudiantes:0,
    nombreEstudiante:"",
    apellidoEstudiante:"",
    email:"",
    cedulaEstudiante:""
  }
  public cursosSelected:ICursos={
    idCursos:0,
    nombreCursos:""
  }
  public codSeguro="";
  public cedula ="";
  public idPersona=0;
  public idSguro=0;
  public relacion:ISetRelacion={
    idRegistro:0,
    idPersonas: 0,
    idCursos:0
  }
constructor(
  private registroService:RegistroService,
  private estudiantesService:EstudiantesService,
  private cursosService:CursosService
){}
ngOnInit(){
  this.getEstudiantes()
  this.getCursos()
  this.getRegistro()
}
getCursos() {
  this.cursos = []
  this.cursosService.getCursos().subscribe(resp => {
    this.cursos = resp
    console.log(resp)
  });
}
getEstudiantes() {
  this.estudiantes = []
  this.estudiantesService.getEstudiantes().subscribe(resp => {
    this.estudiantes = resp
    console.log(resp)
  });
}


getRegistro() {
  this.registro = []
  
  this.registroService.getRegistro().subscribe(resp => {
    this.registro = resp
    console.log(resp)
  });
}

setRegistro(){
  this.relacion.idPersonas=this.estudianteSelected.idEstudiantes
  this.relacion.idCursos=this.cursosSelected.idCursos
  console.log(this.relacion)
  this.registroService.setRegistro(this.relacion).subscribe(resp=>{
    if (resp) {
      alert(resp)
      console.log(resp)
     this.getRegistro();

  }
  else{
    alert("El estudiante ya tiene registrado un curso")
  }
});

}

}
