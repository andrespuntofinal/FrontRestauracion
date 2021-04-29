import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatRadioModule,
    MatFormFieldModule
    
    
    
  ],
  exports:[
    MatRadioModule,
    MatFormFieldModule
    
    
    
  ]
})
export class MaterialModule { }
