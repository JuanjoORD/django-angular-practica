import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  public url: string;
  public token;
  public headers;
  public enfermedad;
  public headersC = new HttpHeaders().set("Content-Type", "application/json");

  constructor(
    public _http: HttpClient,    
  ) {
    this.url = 'localhost:8000/guatemala/';
  }

  agregarDepartamento(departamento): Observable<any> {
    let body = JSON.stringify(departamento);
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    let a = this._http.post(this.url + "enfermedadCronica", body, {
      headers: this.headersC,
    });
    console.log(a);
    return a;
  }
  buscarDepartamento(id:number): Observable<any> {    
    let a = this._http.get(this.url + "enfermedadCronica/" + id, {headers:this.headersC});   
    return a;
  }
  
  actualizarDepartamento(id:number, departamento): Observable<any> {
    let body = JSON.stringify(departamento);    
    let a = this._http.put(this.url + "enfermedadCronica/" + id.toString(), body, {
      headers: this.headersC,
    });
    return a;
  }

  listarDepartamento(): Observable<any> {    
    let a = this._http.get(this.url + "enfermedadCronica", {
      headers: this.headersC,
    });
    return a;
  }
}
