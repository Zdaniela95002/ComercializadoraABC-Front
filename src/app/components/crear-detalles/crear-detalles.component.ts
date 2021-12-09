import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Producto } from 'src/app/Modelo/Producto';
import { Detalle } from 'src/app/Modelo/Detalle';

@Component({
  selector: 'app-crear-detalles',
  templateUrl: './crear-detalles.component.html',
  styleUrls: ['./crear-detalles.component.css','./app.sb-admin-2.min.css','./fontawesome-free/css/all.min.css']
})
export class CrearDetallesComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void
  {
    this.Editar();
  }

  producto:Producto = new Producto();
  detalle:Detalle = new Detalle();
  Editar()
  {
    
    let id = localStorage.getItem("id");

    this.service.getProductoId(+id)
    .subscribe(data =>{this.producto=data})
  }

  GuardarDetalle()
  {

    this.service.createDetalle(this.detalle)
    .subscribe(data=>{alert("Se ha creado el detalle");
    location.reload()
  })

  }

}
