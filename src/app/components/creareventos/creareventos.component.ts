import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-creareventos',
  templateUrl: './creareventos.component.html',
  styleUrls: ['./creareventos.component.css']
})
export class CreareventosComponent implements OnInit {

  eventos: FormGroup;
  

  constructor(private fb: FormBuilder) { 

    this.eventos = this.fb.group({
     

      //identificacion: ['', Validators.required],
     
    })

  }

  ngOnInit(): void {
  }

  guardarEventos(){

    console.log("eventos");
  }
  

  

}
