import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  urlbase = 'https://localhost:7160/api/'
  controlador = 'Estudiantes/'
  constructor( private httpClient:HttpClient) { }
  getEstudiantes(): Observable<any> {
    var metodo = 'ObtenerEstudiantes'
    return this.httpClient.get<any>(this.urlbase + this.controlador + metodo);
  }
  setEstudiantes(datosPersonas: any) {
    var metodo = 'setEstudiantes'
    return this.httpClient.post<any>(this.urlbase + this.controlador + metodo, datosPersonas)
  }
  updateEstudiantes(datosPersonas: any) {
    var metodo = 'putEstudiantes'
    return this.httpClient.post<any>(this.urlbase + this.controlador + metodo, datosPersonas)
  }
  deleteEstudiantes(id: number) {
    var metodo='deleteEstudiante'
    let params = new HttpParams()
      .append("id", id)
    console.log(id);
    const headers = new HttpHeaders().set('content-type', 'application/json')
    return this.httpClient.post<any>(this.urlbase + this.controlador + metodo, id, { headers, params });
  }
}
