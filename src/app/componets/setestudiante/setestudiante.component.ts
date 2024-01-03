import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IEstudiantes } from 'src/app/interface/estudiantes';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-setestudiante',
  templateUrl: './setestudiante.component.html',
  styleUrls: ['./setestudiante.component.css']
})
export class SetestudianteComponent implements OnInit {

  titulo: string ="Registrar"

  estudiantes: IEstudiantes={
    idEstudiantes:0,
    nombreEstudiante:"",
    apellidoEstudiante:"",
    email:"",
    cedulaEstudiante:""
    
  }
  expresiones = {
    texto: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    numero: /^[0-9]$/,
    correo: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  }
  constructor(
    private estudianteService: EstudiantesService,
    private matdialog:MatDialog
  ) { }
  ngOnDestroy(): void {
    localStorage.removeItem("usuario")
  }
  ngOnInit(): void {
    this.obtenerDatos();
    }
    obtenerDatos() {
      if (localStorage.getItem("usuario")) {
        var datos = localStorage.getItem("usuario")
        this.estudiantes = JSON.parse(datos!)
        this.titulo = "Actualizar"
      }
    }
    onKeyPressTexto(event: KeyboardEvent) {
      const input = event.key;
      const regex = /^[a-z A-Z]+$/;
      if (!regex.test(input)) {
        event.preventDefault();
      }
    }
    onKeyPressNumero(event: KeyboardEvent) {
      const input = event.key;
      const regex = /^[0-9]+$/;
      if (!regex.test(input)) {
        event.preventDefault();
      }
    }
    
    validarDatos() {
      if (this.expresiones.texto.test(this.estudiantes.nombreEstudiante)
        && this.expresiones.texto.test(this.estudiantes.apellidoEstudiante)
        && this.expresiones.correo.test(this.estudiantes.email)
        && this.estudiantes.cedulaEstudiante.length==10
        //&& this.expresiones.numero.test(this.personas.edadPersonas)
      ) {
  
        return true;
      } else {
        alert("Los datos son incorrectos")
        return false;
      }
    } 
  
    setEstudiantes() {
      if (this.validarDatos()) {
            if (this.estudiantes.idEstudiantes == 0) {
        this.estudianteService.setEstudiantes(this.estudiantes).subscribe(resp => {
          if (resp) {
            
            console.log(resp)
          } else {
            alert("No se pudo registrar")
          }
        });
      } else {
        this.estudianteService.updateEstudiantes(this.estudiantes).subscribe(resp => {
          if (resp) {
            localStorage.removeItem("usuario");
            this.matdialog.closeAll();
          }
          else {
            alert("No se pudo editar la persona");
          }
        });
      }
      this.matdialog.closeAll();
      
    }
  }

    dismissModal() {
      this.matdialog.closeAll();
    }

}
