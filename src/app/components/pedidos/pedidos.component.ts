import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/Modelo/Pedido';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css','./app.sb-admin-2.min.css','./fontawesome-free/css/all.min.css']
})
export class PedidosComponent implements OnInit {

  pedidos!:Pedido[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void
  {
    this.service.getPedidos()
    .subscribe(data=>{this.pedidos=data});
  }

}
