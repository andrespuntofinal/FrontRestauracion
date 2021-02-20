import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-list-reservas',
  templateUrl: './list-reservas.component.html',
  styleUrls: ['./list-reservas.component.css']
})
export class ListReservasComponent implements OnInit {

  listReservas: Reserva[];
  loading = false;

  constructor(private reservaService:ReservaService) { }

  ngOnInit(): void {

    this.cargarReserva();
  }


  cargarReserva(){

    this.loading = true;
    this.reservaService.getListReserva().subscribe(data =>{

      this.loading = false;
      this.listReservas = data;

    })
  }

}
