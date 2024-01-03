import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  urlbase = 'https://localhost:7160/api/'
  controlador = 'Registro/'
  constructor( private httpClient:HttpClient) { }
  getRegistro():Observable<any>{
    var metodo = 'ObtenerRegistro'
    return this.httpClient.get<any>(this.urlbase + this.controlador + metodo);
  }
  setRegistro(datosRegistro: any) {
    var metodo = 'setRegistro'
    return this.httpClient.post<any>(this.urlbase + this.controlador + metodo, datosRegistro)
  }
  getRegistroById(id: number): Observable<any> {
    var metodo = 'ObtenerRegistroId'
    const params = new HttpParams().append('id', id);
    let headers = new HttpHeaders().set('Type-content', 'aplication/json')
    return this.httpClient.get<any>(this.urlbase + this.controlador + metodo, { params });
  }
}
