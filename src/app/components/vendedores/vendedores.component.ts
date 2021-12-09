import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendedor } from 'src/app/Modelo/Vendedor';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css','./app.sb-admin-2.min.css','./fontawesome-free/css/all.min.css']
})
export class VendedoresComponent implements OnInit {

  
  vendedores!:Vendedor[];
  constructor(private service:ServiceService, private router:Router)  { }
  
  ngOnInit(): void 
  {
    
    this.service.getVerdedores()
    .subscribe(data=>{this.vendedores=data});
  }

  Editar(vendedor:Vendedor):void
  {
    localStorage.setItem("id",vendedor.identificacion.toString());
    this.router.navigate(["modificar"]);
  }

  Eliminar(vendedor:Vendedor)
  {
    alert("Usuario Eliminado");
    location.reload();
    
    this.service.deleteVendedor(vendedor)
    .subscribe(data=>{
      this.vendedores=this.vendedores.filter(v=> v!== vendedor);
    
    })
   
 
  }





}
