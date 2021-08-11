import { Component, OnInit, ViewChild } from '@angular/core';
import { Eventos } from 'src/app/models/eventos';
import { EventosService } from 'src/app/services/eventos.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MensajeconfirmacionComponent } from '../mensajeconfirmacion/mensajeconfirmacion.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eveninsc',
  templateUrl: './eveninsc.component.html',
  styleUrls: ['./eveninsc.component.css']
})
export class EveninscComponent implements OnInit {


  displayedColumns: string[] = ['id','nombreevento','fechaevento','horarioevento','asistentesevento'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;;
  idEv: number;
  nomev: string;


  listEventos: Eventos[];

  constructor(private eventosService: EventosService, public dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {

    this.cargarEvento();
  }


  NavegarEvento(id: number, nomb: string) {

    this.idEv= id;
    this.nomev= nomb;
    

    this.router.navigateByUrl('eveninsc', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/vertodoId", this.idEv, this.nomev ])); 

    
    
    
  }

  cargarEvento() {


    this.eventosService.getListEventos().subscribe(data => {

      console.log("data  " + data);
      this.listEventos = data;
      this.dataSource = new MatTableDataSource(this.listEventos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      
    })


  }

}
