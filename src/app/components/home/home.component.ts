import { Component, OnInit } from '@angular/core';
import { Eventos } from 'src/app/models/eventos';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listEventos: Eventos[];

  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {

    
    window.scroll(0,0);
  }

 

  ngOnDestroy() {
    console.log('Items destroyed');
  }

}
