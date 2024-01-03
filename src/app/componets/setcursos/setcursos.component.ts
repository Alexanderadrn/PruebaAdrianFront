import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICursos } from 'src/app/interface/cursos';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-setcursos',
  templateUrl: './setcursos.component.html',
  styleUrls: ['./setcursos.component.css']
})
export class SetcursosComponent implements OnInit {

  titulo: string ="Registrar"

  cursos: ICursos={
    idCursos:0,
    nombreCursos:"",
    
    
  }
  expresiones = {
    texto: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    numero: /^[0-9]$/

  }
  constructor(
    private cursosService: CursosService,
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
        this.cursos = JSON.parse(datos!)
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
      if (this.expresiones.texto.test(this.cursos.nombreCursos)
       
      ) {
  
        return true;
      } else {
        alert("Los datos son incorrectos")
        return false;
      }
    } 
  
    setCursos() {
      //if (this.validarDatos()) {
            if (this.cursos.idCursos == 0) {
        this.cursosService.setCursos(this.cursos).subscribe(resp => {
          if (resp) {
            alert(resp)
            console.log(resp)
          } else {
            alert("No se pudo registrar")
          }
        });
      } else {
        this.cursosService.updateCursos(this.cursos).subscribe(resp => {
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

    dismissModal() {
      this.matdialog.closeAll();
    }

}
