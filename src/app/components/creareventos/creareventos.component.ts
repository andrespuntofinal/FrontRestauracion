import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Eventos } from 'src/app/models/eventos';
import { EventosService } from 'src/app/services/eventos.service';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-creareventos',
  templateUrl: './creareventos.component.html',
  styleUrls: ['./creareventos.component.css']
})
export class CreareventosComponent implements OnInit {

  eventos: FormGroup;
  fechaserparam = "2021-02-14";
  listEventos: Eventos[];
  
  idevento:any;
  accion = 'Crear';
  
  
  constructor(private fb: FormBuilder, private eventosService:EventosService,  
    private route:ActivatedRoute, private router:Router )
  { 

    this.eventos = this.fb.group({

      nombreevento: ['', Validators.required],
      descripcionevento: ['', Validators.required],
      asistentesevento: ['', Validators.required],
      fechaevento: ['', Validators.required],
      horarioevento: ['', Validators.required],
    })

    const idParam = 'id';
    this.idevento = this.route.snapshot.params[idParam];


  }

  ngOnInit(): void {

    console.log("EVENTO" + this.idevento);

    if (this.idevento !== undefined ){

      this.accion = 'Editar';
      this.obtenerEventos();
    }

  }

  guardarEventos(){

    const eventos: Eventos = {

      asistentesevento: parseInt(this.eventos.get("asistentesevento").value),
      //identificacion: 12345,
      nombreevento: this.eventos.get("nombreevento").value,
      descripcionevento: this.eventos.get("descripcionevento").value,
      fechaevento: this.eventos.get("fechaevento").value,
      horarioevento: this.eventos.get("horarioevento").value,
      //horario: "08:00",

    };

    console.log("param antes llamado:" + eventos);

    this.eventosService.guardarEventos(eventos).subscribe(data =>{

      Swal.fire({
        title: 'Creación exitosa del evento',
        text: this.eventos.get("nombreevento").value,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })

      this.eventos.reset();

    this.router.navigateByUrl('consultareventos', {skipLocationChange: true}).then(()=>
    this.router.navigate(["creareventos"])); 

    

    });
  }


  obtenerEventos(){

    console.log("llamando evento");

    this.eventosService.cargarEventos(this.idevento).subscribe(data => {

      
      this.listEventos = data;
     //console.log(data);
     console.log(this.listEventos);



     this.eventos.patchValue({
      nombreevento: this.listEventos['nombreevento'],
      descripcionevento: this.listEventos['descripcionevento'],
      asistentesevento: this.listEventos['asistentesevento'],
      horarioevento: this.listEventos['horarioevento'],
      fechaevento: this.listEventos['fechaevento'],
        
        
      });

          
    });
    
   
    
  }
  
  ngOnDestroy(){

    console.log("DESTRUYENDO");

  }
  

}
