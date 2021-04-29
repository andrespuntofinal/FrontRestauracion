import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { EventEmitter }  from 'events';

@Component({
  selector: 'app-count-reservas',
  templateUrl: './count-reservas.component.html',
  styleUrls: ['./count-reservas.component.css']
})
export class CountReservasComponent implements OnInit {

  @Input() todos: number;
  @Input() primer: number;
  @Input() segundo: number;
  @Output() countRadioButtonChange = new EventEmitter<string>();

  radioButtonSeleccionado = '08:00';

  constructor() {
    this.todos = 0;
    this.primer = 0;
    this.segundo = 0;
   }

  ngOnInit(): void {
  }

  
  radioChange(): void{
    this.countRadioButtonChange.emit(this.radioButtonSeleccionado);

  }

}
