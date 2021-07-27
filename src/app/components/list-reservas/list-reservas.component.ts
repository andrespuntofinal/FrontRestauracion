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
  idEv: number;

  constructor(private reservaService:ReservaService, private router:Router) { }

  ngOnInit(): void {

    this.cargarReserva();
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

  NavegarEvento(id: number) {

    this.idEv= id;

    

    this.router.navigateByUrl('consultareventos', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/editareventos", this.idEv])); 

    
    
    
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
