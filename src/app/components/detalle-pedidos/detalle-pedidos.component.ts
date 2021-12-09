import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Detalle } from 'src/app/Modelo/Detalle';

@Component({
  selector: 'app-detalle-pedidos',
  templateUrl: './detalle-pedidos.component.html',
  styleUrls: ['./detalle-pedidos.component.css','./app.sb-admin-2.min.css','./fontawesome-free/css/all.min.css']
})
export class DetallePedidosComponent implements OnInit {

  productos!:Producto[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void 
  {
    this.service.getProductos()
    .subscribe(data=>{this.productos=data});
  }

  
  Editar(producto:Producto):void
  {
    localStorage.setItem("id",producto.codProducto.toString());
    this.router.navigate(["crearDetalle"]);
  }
}
