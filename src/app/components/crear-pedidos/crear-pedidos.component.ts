import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/Modelo/Pedido';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-crear-pedidos',
  templateUrl: './crear-pedidos.component.html',
  styleUrls: ['./crear-pedidos.component.css','./app.sb-admin-2.min.css','./fontawesome-free/css/all.min.css']
})
export class CrearPedidosComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  pedido:Pedido = new Pedido();
  GuardarPedido()
  {

    this.service.createPedido(this.pedido)
    .subscribe(data=>{alert("Se ha creado el pedido, proceda a ingresar los productos");
     this.router.navigate(["detalleProducto"])
  })

  }

}
