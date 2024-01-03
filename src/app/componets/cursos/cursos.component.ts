import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CursosService } from 'src/app/services/cursos.service';
import { SetcursosComponent } from '../setcursos/setcursos.component';
import { ICursos } from 'src/app/interface/cursos';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public cursos: any[]=[]
  constructor(
    private cursoService: CursosService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getCursos()
  }
  getCursos() {
    this.cursos = []
    this.cursoService.getCursos().subscribe(resp => {
      this.cursos = resp
      console.log(resp)
    });
  }
  registrarCurso() {
    const dialogRef = this.matDialog.open(SetcursosComponent, {
      width: '600px',
      panelClass: 'fondo',
      data: null
    })
    dialogRef.afterClosed().subscribe(() => {
      this.getCursos();
    });
  }
  actualizarCursos( curso: any){
    localStorage.setItem("usuario",JSON.stringify(curso));
    const dialogRef = this.matDialog.open(SetcursosComponent, {
      width: '580px',
      height:'450px',
      panelClass: 'fondo',
      data: null
    })
    dialogRef.afterClosed().subscribe(() => {
      this.getCursos();
    });
  }
  openConfirmationDialog(cursos: ICursos): void {
    const dialogRef = this.matDialog.open(ConfirmationComponent, {
      width: '300px',
      data: {
        message: '¿Estás seguro de eliminar el cliente seleccionado?',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.cursoService.deleteCursos(cursos.idCursos).subscribe(resp => {
          if (resp) {
            alert("Se elmino correctamente");
            this.ngOnInit();
          } else { alert("El curso tiene registrado un estudiante y no se puede eliminar") }
        });
        console.log('Usuario confirmó');
      } else {
        console.log('Usuario canceló');
      }
    });
  }

}
