import { Component, OnInit, ViewChild } from '@angular/core';
import { Eventos } from 'src/app/models/eventos';
import { CreareventosComponent } from 'src/app/components/creareventos/creareventos.component';
import { EventosService } from 'src/app/services/eventos.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MensajeconfirmacionComponent } from '../mensajeconfirmacion/mensajeconfirmacion.component';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-consultareventos',
  templateUrl: './consultareventos.component.html',
  styleUrls: ['./consultareventos.component.css']
})
export class ConsultareventosComponent implements OnInit {

  displayedColumns: string[] = ['id','nombreevento','asistentesevento', 'fechaevento', 'horarioevento', 'acciones'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;;
  idEv: string;


  listEventos: Eventos[];

  constructor(private eventosService: EventosService, public dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {

    this.cargarEvento();

  }

  eliminarEvento(id: number) {

    const dialogRef = this.dialog.open(MensajeconfirmacionComponent, {
      width: '350px',
      data: {mensaje: 'Está seguro de eliminar el evento? '}
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result === 'aceptar'){
        
        this.eventosService.deleteEventos(id).subscribe(data => {
          this.cargarEvento();
      
          })

      }

     
     
    });

    
  }

  NavegarEvento(id: string) {

    //this.idEv= id;
   
    //this.router.navigateByUrl('consultareventos', {skipLocationChange: true}).then(()=>
    //this.router.navigate(["/editareventos", this.idEv])); 

    const dialogRef = this.dialog.open(CreareventosComponent, {
      width: '620px',
      height: '520px',
      data: {idEv: id}
    });
    
    
    
  }
  cargarEvento() {


    this.eventosService.getListEventos().subscribe(data => {

      
      this.listEventos = data;
      this.dataSource = new MatTableDataSource(this.listEventos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

            
    })


  }

  CrearEventos(){

    const dialogRef = this.dialog.open(CreareventosComponent, {
      width: '620px',
      height: '520px',
      data: {idEv:0}
    });

  }

}
