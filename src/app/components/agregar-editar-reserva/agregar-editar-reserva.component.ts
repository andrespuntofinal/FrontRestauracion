import { Component, OnInit, Input, Output, Inject,LOCALE_ID } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import  Swal from 'sweetalert2';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-agregar-editar-reserva',
  templateUrl: './agregar-editar-reserva.component.html',
  styleUrls: ['./agregar-editar-reserva.component.css']
})
export class AgregarEditarReservaComponent implements OnInit {

  reservas: FormGroup;
  fechaserparam = "2021-02-14";
  nomeven: string;
  feceven: any;
  horeven: string;
  ideven: any;
  datePipeString : string;


  constructor(@Inject(LOCALE_ID) private locale: string, private fb: FormBuilder, private reservaService:ReservaService,  
    private route:ActivatedRoute, private router:Router,
    public dialogRef: MatDialogRef<AgregarEditarReservaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    
    ) { 


    this.nomeven = data.nomeven;  
    this.feceven = data.feceven;
    this.horeven = data.horeven;
    this.ideven  = data.idEv;

    console.log ("RE" + this.nomeven)

    this.reservas = this.fb.group({

      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      celular: ['', Validators.required],
      
    })

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

    

    window.scroll(0,220);
  }

  guardarReserva(){

    console.log("vvvvv", this.ideven);

    const reserva: Reserva = {

      identificacion: parseInt(this.reservas.get("identificacion").value),
      //identificacion: 12345,
      nombre: this.reservas.get("nombre").value,
      celular: this.reservas.get("celular").value,
      fechaservicio: this.feceven,
      horario: this.horeven,
      idevento:this.ideven,
      //horario: "08:00",

    };

    console.log("param antes llamado:" + reserva);

    this.datePipeString = formatDate(this.feceven,'MMM d, y',this.locale);

    this.reservaService.guardarReserva(reserva).subscribe(data =>{

      Swal.fire({
        title: this.reservas.get("nombre").value + ' Tu inscripción fue exitosa!',
        text:  this.nomeven  + ' ' + 'Fecha: ' + this.datePipeString + ' ' + 'Horario: ' + this.horeven + '  Te esperamos! ',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })

      this.dialogRef.close();

    });
  }

  

}
