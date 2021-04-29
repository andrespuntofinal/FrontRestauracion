import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit() {

    console.log('ngOnInit admin');
    this.auth.userProfile$.subscribe( perfil => {

      console.log(perfil);
    });
  }

  ToNosotros(){

document.getElementById("nosotros").scrollIntoView();

  }

  ToServicios()
  {

    document.getElementById("servicios").scrollIntoView();
    
   }

   ToInicio()
   {
 
     document.getElementById("inicio").scrollIntoView();
     
    } 



}
