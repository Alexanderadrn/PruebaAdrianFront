import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistroService } from 'src/app/services/registro.service';
import { SetregistroComponent } from '../setregistro/setregistro.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public registro: any[]=[]
  constructor(
    private registroService: RegistroService,
    private matDialog: MatDialog,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getRegistro()
  }
  getRegistro() {
    this.registro = []
    this.registroService.getRegistro().subscribe(resp => {
      this.registro = resp
      console.log(resp)
    });
  }
  registrarRelacion() {
    this.router.navigate(["SetRegistro"])
  }

}
