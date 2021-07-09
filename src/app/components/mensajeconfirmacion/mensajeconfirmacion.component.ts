import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mensajeconfirmacion',
  templateUrl: './mensajeconfirmacion.component.html',
  styleUrls: ['./mensajeconfirmacion.component.css']
})
export class MensajeconfirmacionComponent implements OnInit {

  mensaje: string;
  btn = 'aceptar';

  constructor(public dialogRef: MatDialogRef<MensajeconfirmacionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

                this.mensaje= data.mensaje;
               }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
