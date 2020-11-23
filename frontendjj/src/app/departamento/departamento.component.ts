import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {PageEvent, MatPaginator} from '@angular/material/paginator';
import { MatDialog } from "@angular/material/dialog";
import Swal from 'sweetalert2'

//Modelos
import { Departamento, DepartamentoU, Municipio }  from '../models/departamento.model'
//servicios
import { DepartamentoService } from '../services/departamento.service'
//Componentes propios
import { MidialogComponent } from '../midialog/midialog.component'

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {
  public municipio:Municipio = new Municipio()
  public departamento:Departamento = new Departamento()

  public departamentos:Departamento[] = []
  public municipios:Municipio[] = []  
  public relaciones
  public relacion

  @ViewChild(MatPaginator) paginator: MatPaginator;  
  dataSource: Departamento[] = [];
  dataSourceTemp: Departamento[] = [];

  displayedColumns: string[] = ['id', 'nombre', 'accion'];  

  inicioPagina = 0
  finPagina = 5
  cargando = true

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _departamentoService:DepartamentoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._departamentoService.listarDepartamento().subscribe(
      (response) => {
        if (response == null) {          
          console.log("Error al listar departamentos");
        } else {
          this.dataSourceTemp = response
          this.dataSource = response     
          this.cargando = false     
          console.log(this.dataSourceTemp)       
        }
      },
      (error) => {
        var errorMessage = <any>error;
        console.log(errorMessage);        
      }
    );
  }

  guardar() {
    this._departamentoService.agregarDepartamento(this.departamento).subscribe(
      (response) => {
        if (response == null) {          
          console.log("Error al guardar estado civil");
        } else {
          console.log(response)
          this.departamento = new Departamento()       
          this.departamento.id = response.id
          this.departamento.nombre = response.nombre

          this.dataSourceTemp = [...this.dataSourceTemp, this.departamento]          
          this.departamento = new Departamento()   
          Swal.fire(
            '¡Que bien!',
            'Departamento creado',
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

  actualizar() {
    this._departamentoService.actualizarDepartamento(this.departamento.id, this.departamento).subscribe(
      (response) => {
        if (response == null) {          
          console.log("Error al guardar estado civil");
        } else {
          this.dataSourceTemp.map(x => {
            if(x.id === this.departamento.id){
              x.nombre = this.departamento.nombre
            }
          })          
          this.departamento = new Departamento()     
          Swal.fire(
            '¡Que bien!',
            'Departamento actualizado',
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

  pageChange(event: PageEvent) {
    this.inicioPagina = event.pageIndex * event.pageSize
    this.finPagina = this.inicioPagina + event.pageSize
    if (this.finPagina > this.dataSourceTemp.length)
      this.finPagina = this.dataSourceTemp.length

    this.dataSource = this.dataSourceTemp.slice(this.inicioPagina, this.finPagina)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;    
    //Si el input esta vacío mostrará todos los datos
    if (filterValue === '') {
      this.dataSourceTemp = this.dataSource.slice(this.inicioPagina, this.finPagina)
    } else {
      //Si el input no esta vacío filtra los datos encontrando coincidencias
      let filtro = filterValue.toLowerCase()
      
      this.dataSourceTemp = this.dataSource.filter(x => {
        if (x.nombre.toLowerCase().includes(filtro))
          return x
      })
    }
  }

  openDialog(actualizar: number) {
    if (actualizar < 1) {
      const dialogRef = this.dialog.open(MidialogComponent, {
        data: {
          tipo: true,
          accion: "Creando departamento",
          button: "Crear",
          nombre: "",                 
        },
      });

      dialogRef.afterClosed().subscribe((res) => {
        if (res === undefined || res.nombre.length < 2) {
          console.log("No recibi nada");
        } else {
          this.departamento.nombre = res.nombre
          this.guardar();
        }
      });
    } else {
      this.dataSource.map((x) => {
        if (x.id == actualizar) {
          this.departamento = x;
        }
      });
      const dialogRef = this.dialog.open(MidialogComponent, {
        data: {
          tipo: true,
          accion: "Editando departamento",
          button: "Actualizar",
          nombre: this.departamento.nombre,
        },
      });

      dialogRef.afterClosed().subscribe((res) => {
        if (res === undefined || res.nombre.length < 2) {
          console.log("No recibi nada");
        } else {
          this.departamento.nombre = res.nombre;
          this.actualizar();
        }
      });
    }
  }
}
