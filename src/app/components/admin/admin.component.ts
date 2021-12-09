import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css','./app.sb-admin-2.min.css','./fontawesome-free/css/all.min.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) 
  { }
  ListarVendedores()
  {
    this.router.navigate(["gestionVendedor"]);
  }
  ngOnInit(): void {
  }

}
