import { Component, OnInit, ViewChild } from '@angular/core';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-list-reservas',
  templateUrl: './list-reservas.component.html',
  styleUrls: ['./list-reservas.component.css']
})
export class ListReservasComponent implements OnInit {

  listReservas: Reserva[];
  loading = false;
  radioButtonSeleccionado = '10:00';

  displayedColumns: string[] = ['identificacion','nombre','celular'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;;
  idevento:any;
  nomevento:any;

  constructor(private reservaService:ReservaService, private route:ActivatedRoute, private router:Router) { 

    const idParam = 'id';
    const nombeve = 'nomb';
    this.idevento = this.route.snapshot.params[idParam];
    this.nomevento = this.route.snapshot.params[nombeve];

  }

  ngOnInit(): void {


    console.log("nomevento" + this.nomevento);

    if (this.idevento !== undefined ){

      
      this.cargarReservaId();
    }
    else{

    this.cargarReserva();

    }

   
  }

  cargarReservaId(){

    console.log("EVENTOooIDD");

    this.loading = true;
    this.reservaService.getListReserva().subscribe(data =>{

      this.loading = false;
      //this.listReservas = data;

      this.listReservas = data;
      
      console.log("this.idevento" + this.idevento );

      this.dataSource = new MatTableDataSource(this.listReservas.filter(list => list.idevento === parseInt(this.idevento)));
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      console.log("ModeloDere" + data.length);

    })
  }

  cargarReserva(){

    this.loading = true;
    this.reservaService.getListReserva().subscribe(data =>{

      this.loading = false;
      //this.listReservas = data;

      this.listReservas = data;
      this.dataSource = new MatTableDataSource(this.listReservas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

     

    })
  }



  TotalAsistentes(): number{

  return this.listReservas.length;
  }

  TotalPrimer(): number{

    return this.listReservas.filter(list => list.horario === '08:00').length;
    }

  TotalSegundo(): number{

      return this.listReservas.filter(list => list.horario === '10:00').length;
      }

  ReservaCountRadioButtonChange(radioButtonSelec: string): void{

    this.radioButtonSeleccionado = radioButtonSelec;
  }

}
