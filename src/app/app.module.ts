import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudiantesComponent } from './componets/estudiantes/estudiantes.component';
import { CursosComponent } from './componets/cursos/cursos.component';
import { RegistroComponent } from './componets/registro/registro.component';
import { SetestudianteComponent } from './componets/setestudiante/setestudiante.component';
import { SetcursosComponent } from './componets/setcursos/setcursos.component';
import { SetregistroComponent } from './componets/setregistro/setregistro.component';
import { MenuComponent } from './componets/menu/menu.component';
import { ConfirmationComponent } from './componets/confirmation/confirmation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule}from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    CursosComponent,
    RegistroComponent,
    SetestudianteComponent,
    SetcursosComponent,
    SetregistroComponent,
    MenuComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
