import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  urlbase = 'https://localhost:7160/api/'
  controlador = 'Cursos/'
  constructor( private httpClient:HttpClient) { }
  getCursos(): Observable<any> {
    var metodo = 'ObtenerCursos'
    return this.httpClient.get<any>(this.urlbase + this.controlador + metodo);
  }
  setCursos(datosPersonas: any) {
    var metodo = 'setCursos'
    return this.httpClient.post<any>(this.urlbase + this.controlador + metodo, datosPersonas)
  }
  updateCursos(datosPersonas: any) {
    var metodo = 'putCursos'
    return this.httpClient.post<any>(this.urlbase + this.controlador + metodo, datosPersonas)
  }
  deleteCursos(id: number) {
    var metodo='deleteCurso'
    let params = new HttpParams()
      .append("id", id)
    console.log(id);
    const headers = new HttpHeaders().set('content-type', 'application/json')
    return this.httpClient.post<any>(this.urlbase + this.controlador + metodo, id, { headers, params });
  }
}
