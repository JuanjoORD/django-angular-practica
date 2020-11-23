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
    this.url = 'http://localhost:8000/guatemala/';
  }

  //Para los departamentos
  agregarDepartamento(departamento): Observable<any> {
    let body = {
      nombre: departamento.nombre
    }   
    let a = this._http.post(this.url + "departamentos/create/", body, {
      headers: this.headersC,
    });
    console.log(a);
    return a;
  }
  buscarDepartamento(id:number): Observable<any> {    
    let a = this._http.get(this.url + "departamentos/" + id, {headers:this.headersC});   
    return a;
  }
  
  actualizarDepartamento(id:number, departamento): Observable<any> {
    let body = {
      nombre: departamento.nombre      
    }
    let a = this._http.put(this.url + "departamentos/" + id.toString() + '/update/', body, {
      headers: this.headersC,
    });
    return a;
  }

  listarDepartamento(): Observable<any> {    
    let a = this._http.get(this.url + "departamentos", {
      headers: this.headersC,
    });
    return a;
  }

  //Para los municipios
  agregarMunicipio(departamento): Observable<any> {
    let body = {
      nombre: departamento.nombre,
      alcalde: departamento.alcalde,
      descripcion: departamento.descripcion      
    }
    let a = this._http.post(this.url + "municipios/create/", body, {
      headers: this.headersC,
    });
    console.log(a);
    return a;
  }
  buscarMunicipio(id:number): Observable<any> {    
    let a = this._http.get(this.url + "municipios/" + id, {headers:this.headersC});   
    return a;
  }
  
  actualizarMunicipio(id:number, departamento): Observable<any> {
    let body = {
      nombre: departamento.nombre,
      alcalde: departamento.alcalde,
      descripcion: departamento.descripcion
    }
    let a = this._http.put(this.url + "municipios/" + id.toString() + '/update/', body, {
      headers: this.headersC,
    });
    return a;
  }

  listarMunicipio(): Observable<any> {    
    let a = this._http.get(this.url + "municipios", {
      headers: this.headersC,
    });
    return a;
  }

  //Para las relaciones
  agregarRelacion(departamento): Observable<any> {
    let body = {
      municipio: departamento.municipio,
      departamento: departamento.departamento
    }
    let a = this._http.post(this.url + "relacion/create/", body, {
      headers: this.headersC,
    });
    console.log(a);
    return a;
  }
  buscarRelacion(id:number): Observable<any> {    
    let a = this._http.get(this.url + "relacion/" + id, {headers:this.headersC});   
    return a;
  }
  
  actualizarRelacion(id:number, departamento): Observable<any> {
    let body = JSON.stringify(departamento);    
    let a = this._http.put(this.url + "relacion/" + id.toString() + '/update/', body, {
      headers: this.headersC,
    });
    return a;
  }

  listarRelacion(): Observable<any> {    
    let a = this._http.get(this.url + "relacion", {
      headers: this.headersC,
    });
    return a;
  }
}
