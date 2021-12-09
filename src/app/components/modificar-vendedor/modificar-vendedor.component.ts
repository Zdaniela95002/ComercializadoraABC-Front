import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendedor } from 'src/app/Modelo/Vendedor';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-modificar-vendedor',
  templateUrl: './modificar-vendedor.component.html',
  styleUrls: ['./modificar-vendedor.component.css','./app.sb-admin-2.min.css','./fontawesome-free/css/all.min.css']
})
export class ModificarVendedorComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }
  

  ngOnInit(): void 
  {
    this.Editar();
  }

  
  vendedor:Vendedor = new Vendedor();
  ModificarVendedor()
  {

    this.service.updateVendedor(this.vendedor)
    .subscribe(data=>{alert("Modificación exitosa");
     this.router.navigate(["persona"])
  })

  }

  Editar()
  {
    
    let id = localStorage.getItem("id");

    this.service.getVendedorId(+id)
    .subscribe(data =>{this.vendedor=data})
  }

}
