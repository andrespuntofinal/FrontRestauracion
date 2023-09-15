import { Component, OnInit, ViewChild } from '@angular/core';
import { Miembros } from 'src/app/models/miembros';
import { CrearmiembrosComponent } from 'src/app/components/crearmiembros/crearmiembros.component';
import { MiembrosService } from 'src/app/services/miembros.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MensajeconfirmacionComponent } from '../mensajeconfirmacion/mensajeconfirmacion.component';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-consultarmiembros',
  templateUrl: './consultarmiembros.component.html',
  styleUrls: ['./consultarmiembros.component.css']
})
export class ConsultarmiembrosComponent implements OnInit {

  displayedColumns: string[] = ['id','nombre', 'celular', 'barrio', 'poblacion', 'estado_civil', 
  'fecha_nacimiento', 'tipo_miembro', 'ministerio', 'bautizado', 'acciones'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;;
  idMi: string;


  listMiembros: Miembros[];

  constructor(private miembrosService: MiembrosService, public dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {

    this.cargarMiembro();

  }

  eliminarMiembro(id: number) {

    const dialogRef = this.dialog.open(MensajeconfirmacionComponent, {
      width: '350px',
      data: {mensaje: 'Está seguro de eliminar el registro? '}
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result === 'aceptar'){
        
        this.miembrosService.deleteMiembros(id).subscribe(data => {
          this.cargarMiembro();
      
          })

      }

     
     
    });

    
  }

  NavegarMiembro(id: string) {

      const dialogRef = this.dialog.open(CrearmiembrosComponent, {
      width: '620px',
      height: '520px',
      data: {idMi: id}
    });
    
    
    
  }
  cargarMiembro() {


    this.miembrosService.getListMiembros().subscribe(data => {

      console.log("dataxxxxxxxx  " + data);
      this.listMiembros = data;
      this.dataSource = new MatTableDataSource(this.listMiembros);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      console.log("dataxxxxxxxx  " + this.listMiembros);
    })


  }

  CrearMiembros(){

    const dialogRef = this.dialog.open(CrearmiembrosComponent, {
      width: '620px',
      height: '520px',
      data: {idMi:0}
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
