import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoguinComponent } from "./components/loguin/loguin.component";
import { AdminComponent } from './components/admin/admin.component';
import { VendedoresComponent } from './components/vendedores/vendedores.component';
import { CrearVendedorComponent } from './components/crear-vendedor/crear-vendedor.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ModificarVendedorComponent } from './components/modificar-vendedor/modificar-vendedor.component';
import { CrearProductosComponent } from './components/crear-productos/crear-productos.component';
import { ModificarProductoComponent } from './components/modificar-producto/modificar-producto.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { CrearPedidosComponent } from './components/crear-pedidos/crear-pedidos.component';
import { DetallePedidosComponent } from './components/detalle-pedidos/detalle-pedidos.component';
import { CrearDetallesComponent } from './components/crear-detalles/crear-detalles.component';


const routes: Routes = [

  {  path:'loguin',component:LoguinComponent },
  {  path:'modificar',component:ModificarVendedorComponent },
  {  path:'admin',component:AdminComponent },
  {  path:'crearVendedor',component:CrearVendedorComponent },
  {  path:'persona',component:VendedoresComponent },
  {  path:'producto',component:ProductosComponent },
  {  path:'crearProducto',component:CrearProductosComponent },
  {  path:'modificarProducto',component:ModificarProductoComponent },
  {  path:'detalleProducto',component:DetallePedidosComponent },
  {  path:'crearPedido',component:CrearPedidosComponent },
  {  path:'crearDetalle',component:CrearDetallesComponent },
  {  path:'pedidos',component:PedidosComponent },
  { path: '**', redirectTo: '/loguin', pathMatch: 'full' },
  ];
  

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
