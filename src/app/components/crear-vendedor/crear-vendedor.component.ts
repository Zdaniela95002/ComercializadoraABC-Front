import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendedor } from 'src/app/Modelo/Vendedor';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-crear-vendedor',
  templateUrl: './crear-vendedor.component.html',
  styleUrls: ['./crear-vendedor.component.css','./app.sb-admin-2.min.css','./fontawesome-free/css/all.min.css']
})
export class CrearVendedorComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  

  vendedor:Vendedor = new Vendedor();
  GuardarVendedor()
  {

    this.service.createVendedor(this.vendedor)
    .subscribe(data=>{alert("Almacenamiento exitoso");
     this.router.navigate(["persona"])
  })

  }

}
