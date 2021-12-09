import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css','./app.sb-admin-2.min.css','./fontawesome-free/css/all.min.css']
})
export class ProductosComponent implements OnInit {

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
    this.router.navigate(["modificarProducto"]);
  }

  Eliminar(producto:Producto)
  {
    alert("Producto Eliminado");
    location.reload();
    
    this.service.deleteProducto(producto)
    .subscribe(data=>{
      this.productos=this.productos.filter(v=> v!== producto);
    
    })
   
 
  }

}
