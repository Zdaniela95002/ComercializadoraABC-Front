import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css','./app.sb-admin-2.min.css']
  
})


export class LoguinComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router)  { }

  ngOnInit(): void {
  }

  InicioSesion(usuario:string, clave:string)
  {
    
    if(usuario==="admin"&& clave==="1234")
    {
      alert("Bienvenido Admin");
      this.router.navigate(["persona"]);
    }
    else
    {
      alert("Usuario o Clave errada");
    }

  }

}
