import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendedor } from '../Modelo/Vendedor';
import { Producto } from '../Modelo/Producto';
import { Pedido } from '../Modelo/Pedido';
import { Detalle } from '../Modelo/Detalle';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient){ }
  
    Url='http://localhost:8084/ABCback/';

    getVerdedores()
    {
      return this.http.get<Vendedor[]>(this.Url+"persona");
    }

    getProductos()
    {
      return this.http.get<Producto[]>(this.Url+"producto");
    }

    getPedidos()
    {
      return this.http.get<Pedido[]>(this.Url+"pedido");
    }

    createVendedor(vendedor:Vendedor)
    {
      return this.http.post<Vendedor>("ABCback/persona",vendedor);
    }

    createProducto(producto:Producto)
    {
      return this.http.post<Producto>("ABCback/producto",producto);
    }

    createPedido(pedido:Pedido)
    {
      return this.http.post<Pedido>("ABCback/pedido",pedido);
    }

    createDetalle(detalle:Detalle)
    {
      return this.http.post<Pedido>("ABCback/detalle",detalle);
    }

    getVendedorId(id:number)
    {
      return this.http.get<Vendedor>("ABCback/persona/"+id)
    }

    getProductoId(id:number)
    {
      return this.http.get<Producto>("ABCback/producto/"+id)
    }

    getPedidoId(id:number)
    {
      return this.http.get<Pedido>("ABCback/pedido/"+id)
    }

    updateVendedor(vendedor:Vendedor)
    {
      return this.http.post<Vendedor>("ABCback/persona",vendedor);
    }

    updatePedido(pedido:Pedido)
    {
      return this.http.post<Vendedor>("ABCback/persona",pedido);
    }

    updateProducto(producto:Producto)
    {
      return this.http.post<Producto>("ABCback/producto",producto);
    }

    deleteVendedor (vendedor:Vendedor)
    {
      return this.http.delete<Vendedor>("ABCback/persona/"+vendedor.identificacion);
    }

    deleteProducto (producto:Producto)
    {
      return this.http.delete<Producto>("ABCback/producto/"+producto.codProducto);
    }

    deletePedido (pedido:Pedido)
    {
      return this.http.delete<Pedido>("ABCback/pedido/"+pedido.codPedido);
    }
  
}
