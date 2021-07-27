import { Component, OnInit } from '@angular/core';
import { Eventos } from 'src/app/models/eventos';
import { EventosService } from 'src/app/services/eventos.service';
import { AgregarEditarReservaComponent } from 'src/app/components/agregar-editar-reserva/agregar-editar-reserva.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-vereventos',
  templateUrl: './vereventos.component.html',
  styleUrls: ['./vereventos.component.css']
})
export class VereventosComponent implements OnInit {

  listEventos: Eventos[];
  vevento:any;
  idEv: number;
  nomeven: string;
  feceven: string;
  horeven: string;
  estaevento:number;
  

  constructor(private eventosService: EventosService, private router:Router, public dialog: MatDialog) { }

  ngOnInit(): void {

         this.cargarEvento();

    

    

    
  }

  cargarEvento() {


    this.eventosService.getListEventos().subscribe(data => {

      
      this.listEventos = data.filter(list => list.estadoevento === 0);

      this.vevento = this.listEventos["nombreevento"];      
      
      this.estaevento = this.listEventos["estadoevento"]; 

      
    })


  }

  InscribirEvento(id: number, nombre: string, fechaevento: string, horarioevento: string, estadoevento: number) {


    console.log("QQQQQQQ" + id + nombre);

    const dialogRef = this.dialog.open(AgregarEditarReservaComponent, {
      width: '550px',
      height: '500px',
      data: {idEv: id, nomeven: nombre, feceven:fechaevento, horeven:horarioevento}
    });
    
    //this.idEv= id;
    //this.router.navigateByUrl('vereventos', {skipLocationChange: true}).then(()=>
    //this.router.navigate(["/reservarevento", this.idEv])); 

    
    
    
  }

}
