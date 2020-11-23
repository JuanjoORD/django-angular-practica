import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {PageEvent, MatPaginator} from '@angular/material/paginator';
import { MatDialog } from "@angular/material/dialog";
import Swal from 'sweetalert2'

//Modelos
import { Departamento, DepartamentoU, Municipio, Relacion }  from '../models/departamento.model'
//servicios
import { DepartamentoService } from '../services/departamento.service'
//Componentes propios
import { MidialogComponent } from '../midialog/midialog.component'

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.css']
})
export class MunicipioComponent implements OnInit {
  public municipio:Municipio = new Municipio()
  public departamento:Departamento = new Departamento()

  public departamentos:Departamento[] = []
  public municipios:Municipio[] = []  
  public relaciones
  public relacion:Relacion = new Relacion()

  @ViewChild(MatPaginator) paginator: MatPaginator;  
  dataSource: Municipio[] = [];
  dataSourceTemp: Municipio[] = [];

  displayedColumns: string[] = ['id', 'nombre', 'alcalde', 'descripcion', 'accion'];

  inicioPagina = 0
  finPagina = 5
  cargando = true

  public departamentoID:number = 0
  public nombreDepartamento:string = ""

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _departamentoService:DepartamentoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this.departamentoID = +params.get('id');      
      this.getDetalles(this.departamentoID);
    });
  }

  getDetalles(id){
    this._departamentoService.buscarDepartamento(id).subscribe(
      (response) => {
        if (response == null) {          
          console.log("Error al listar departamentos");
        } else {
          this.dataSourceTemp = response.municipios.map(x => {return x})
          this.dataSource = response.municipios.map(x => {return x})
          this.nombreDepartamento = response.nombre
          this.departamentoID = response.id
          this.cargando = false          
        }
      },
      (error) => {
        var errorMessage = <any>error;
        console.log(errorMessage);        
      }
    );
  }

  guardar() {
    this._departamentoService.agregarMunicipio(this.municipio).subscribe(
      (response) => {
        if (response == null) {          
          console.log("Error al guardar estado civil");
        } else {
          console.log(response)
          this.municipio = response
          this.relacion.municipio = this.municipio.id
          this.relacion.departamento = this.departamentoID

          this._departamentoService.agregarRelacion(this.relacion).subscribe(
            response => {
              if(response == null){
                console.log('no se puedo crear relacion')
              }
              else{
                this.dataSourceTemp = [...this.dataSourceTemp, this.municipio]          
                this.municipio = new Municipio()      
                this.relacion = new Relacion()
                Swal.fire(
                  '¡Que bien!',
                  'Municipio creado',
                  'success'
                )
              }
            }
          )          
        }
      },
      (error) => {
        var errorMessage = <any>error;
        console.log(errorMessage);        
      }
    );
  }

  actualizar() {
    this._departamentoService.actualizarMunicipio(this.municipio.id, this.municipio).subscribe(
      (response) => {
        if (response == null) {          
          console.log("Error al guardar municipio");
        } else {
          this.dataSourceTemp.map(x => {
            if(x.id === this.municipio.id){
              x.nombre = this.municipio.nombre
              x.alcalde = this.municipio.alcalde
              x.descripcion = this.municipio.descripcion
            }
          })          
          this.municipio = new Municipio()  
          Swal.fire(
            '¡Que bien!',
            'Municipio actualizado',
            'success'
          )
        }
      },
      (error) => {
        var errorMessage = <any>error;
        console.log(errorMessage);        
      }
    );
  }

  openDialog(actualizar: number) {
    if (actualizar < 1) {
      const dialogRef = this.dialog.open(MidialogComponent, {
        data: {
          tipo: false,
          accion: "Creando",
          button: "Crear",
          departamento: this.nombreDepartamento,
          municipio: "",
          alcalde: "",
          descripcion: ""
        },
      });

      dialogRef.afterClosed().subscribe((res) => {
        if (res === undefined || res.municipio.length < 2 || res.alcalde.length < 2 || res.descripcion.length < 2) {
          console.log("No recibi nada");
        } else {
          this.municipio.nombre = res.municipio
          this.municipio.alcalde = res.alcalde
          this.municipio.descripcion = res.descripcion
          this.guardar();
        }
      });
    } else {
      this.dataSource.map((x) => {
        if (x.id == actualizar) {
          this.municipio = x;
        }
      });
      const dialogRef = this.dialog.open(MidialogComponent, {
        data: {
          tipo: false,
          accion: "Editando",
          button: "Actualizar",
          departamento: this.nombreDepartamento,
          municipio: this.municipio.nombre,
          alcalde: this.municipio.alcalde,
          descripcion: this.municipio.descripcion
        },
      });

      dialogRef.afterClosed().subscribe((res) => {
        if (res === undefined || res.municipio.length < 2 || res.alcalde.length < 2 || res.descripcion.length < 2) {
          console.log("No recibi nada");
        } else {
          this.municipio.nombre = res.municipio
          this.municipio.alcalde = res.alcalde
          this.municipio.descripcion = res.descripcion
          this.actualizar();
        }
      });
    }
  }

}
