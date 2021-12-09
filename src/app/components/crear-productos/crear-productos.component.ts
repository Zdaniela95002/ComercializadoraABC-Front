import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from '../../Service/service.service';
@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css','./app.sb-admin-2.min.css','./fontawesome-free/css/all.min.css']
})
export class CrearProductosComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  producto:Producto = new Producto();
  GuardarProducto()
  {

    this.service.createProducto(this.producto)
    .subscribe(data=>{alert("Almacenamiento exitoso");
     this.router.navigate(["producto"])
  })

  }
}
