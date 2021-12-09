import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PersonaComponent } from './components/persona/persona.component';
import { LoguinComponent } from './components/loguin/loguin.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { VendedoresComponent } from './components/vendedores/vendedores.component';
import { CrearVendedorComponent } from './components/crear-vendedor/crear-vendedor.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ModificarVendedorComponent } from './components/modificar-vendedor/modificar-vendedor.component';
import{ FormsModule} from'@angular/forms';
import{ ServiceService} from'../app/Service/service.service';
import{ HttpClientModule} from'@angular/common/http';
import { CrearProductosComponent } from './components/crear-productos/crear-productos.component';
import { ModificarProductoComponent } from './components/modificar-producto/modificar-producto.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { CrearPedidosComponent } from './components/crear-pedidos/crear-pedidos.component';
import { DetallePedidosComponent } from './components/detalle-pedidos/detalle-pedidos.component';
import { CrearDetallesComponent } from './components/crear-detalles/crear-detalles.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    LoguinComponent,
    AdminComponent,
    VendedoresComponent,
    CrearVendedorComponent,
    ModificarVendedorComponent,
    ProductosComponent,
    CrearProductosComponent,
    ModificarProductoComponent,
    PedidosComponent,
    CrearPedidosComponent,
    DetallePedidosComponent,
    CrearDetallesComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
