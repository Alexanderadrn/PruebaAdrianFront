import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { SetestudianteComponent } from '../setestudiante/setestudiante.component';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { IEstudiantes } from 'src/app/interface/estudiantes';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  public estudiantes: any[]=[]
  constructor(
    private estudianteService: EstudiantesService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getEstudiantes()
  }
  getEstudiantes() {
    this.estudiantes = []
    this.estudianteService.getEstudiantes().subscribe(resp => {
      this.estudiantes = resp
      console.log(resp)
    });
  }
  registrarPersona() {
    const dialogRef = this.matDialog.open(SetestudianteComponent, {
      width: '600px',
      panelClass: 'fondo',
      data: null
    })
    dialogRef.afterClosed().subscribe(() => {
      this.getEstudiantes();
    });
  }
  actualizarEstudiante( estudiante: any){
    alert(estudiante.idEstudiantes);
    localStorage.setItem("usuario",JSON.stringify(estudiante));
    const dialogRef = this.matDialog.open(SetestudianteComponent, {
      width: '580px',
      height:'450px',
      panelClass: 'fondo',
      data: null
    })
    dialogRef.afterClosed().subscribe(() => {
      this.getEstudiantes();
    });
  }
  openConfirmationDialog(estudiante: IEstudiantes): void {
    const dialogRef = this.matDialog.open(ConfirmationComponent, {
      width: '300px',
      data: {
        message: '¿Estás seguro de eliminar el cliente seleccionado?',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.estudianteService.deleteEstudiantes(estudiante.idEstudiantes).subscribe(resp => {
          if (resp) {
            alert("Se elmino correctamente");
            this.ngOnInit();
          } else { alert("El estudiante tiene registrado un curso y no se puede eliminar") }
        });
        console.log('Usuario confirmó');
      } else {
        console.log('Usuario canceló');
      }
    });
  }
}
