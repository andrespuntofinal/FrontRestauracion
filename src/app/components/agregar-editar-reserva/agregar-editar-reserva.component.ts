import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import  Swal from 'sweetalert2';


@Component({
  selector: 'app-agregar-editar-reserva',
  templateUrl: './agregar-editar-reserva.component.html',
  styleUrls: ['./agregar-editar-reserva.component.css']
})
export class AgregarEditarReservaComponent implements OnInit {

  reservas: FormGroup;
  fechaserparam = "2021-02-14";


  constructor(private fb: FormBuilder, private reservaService:ReservaService,  
    private route:ActivatedRoute, private router:Router ) { 

    this.reservas = this.fb.group({

      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      celular: ['', Validators.required],
      horario: ['', Validators.required],
    })

  }

  ngOnInit(): void {

    
    window.scroll(0,220);
  }

  guardarReserva(){

    const reserva: Reserva = {

      identificacion: parseInt(this.reservas.get("identificacion").value),
      //identificacion: 12345,
      nombre: this.reservas.get("nombre").value,
      celular: this.reservas.get("celular").value,
      fechaservicio: new Date(),
      horario: this.reservas.get("horario").value,
      //horario: "08:00",

    };

    console.log("param antes llamado:" + reserva);

    this.reservaService.guardarReserva(reserva).subscribe(data =>{

      Swal.fire({
        title: 'Inscripción Exitosa!',
        text: this.reservas.get("nombre").value + ' ' + 'Horario: ' + this.reservas.get("horario").value,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })

    this.router.navigate(['/']);

    });
  }

  

}
