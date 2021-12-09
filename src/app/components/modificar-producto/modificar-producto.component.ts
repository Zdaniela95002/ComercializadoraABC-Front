import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css','./app.sb-admin-2.min.css','./fontawesome-free/css/all.min.css']
})
export class ModificarProductoComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void 
  {
    this.Editar();
  }

  producto:Producto = new Producto();
  ModificarProducto()
  {

    this.service.updateProducto(this.producto)
    .subscribe(data=>{alert("Modificación exitosa");
     this.router.navigate(["producto"])
  })

  }

  Editar()
  {
    
    let id = localStorage.getItem("id");

    this.service.getProductoId(+id)
    .subscribe(data =>{this.producto=data})
  }

}
