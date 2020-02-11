import { infoProducto } from './../interfaces/infoProducto.interface';
import { Producto } from '../interfaces/producto.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public urlFirebase: string = "https://angular-html-andres.firebaseio.com"
  public cargado: boolean = true
  public productos: Producto[] = []
  public productosFiltrado: Producto[] = []

  constructor(private _http: HttpClient) { 
    this.cargarProductos()
  }

  public cargarProductos(){

    return new Promise ((resolve, reject)=>{
      
      this._http.get(this.urlFirebase + '/productos_idx.json').subscribe(
        (resp: Producto[])=>{
          this.productos = resp
  
          /* Temporizador para simular una carga de los productos */
          setTimeout(()=>{
            this.cargado = false
          }, 2000)

          resolve()
        }
      )
    })
  }

  public getProducto(id){
    return this._http.get(`${this.urlFirebase}/productos/${id}.json`)
  }

  public buscarProducto( productoBuscado: string){

    if(this.productos.length === 0){
      /* Cargar Productos */
      this.cargarProductos().then(()=>{
        /* Ejecutamos el filtro */
        this.filtrarProductos( productoBuscado)
      })
    }else{
      /* Cargamos filtro */
      this.filtrarProductos( productoBuscado)
    }
  }

  private filtrarProductos( productoBuscado: string){
    this.productosFiltrado = []

    productoBuscado = productoBuscado.toLocaleLowerCase()
    
    this.productos.forEach( prod =>{

      const tituloLower = prod.titulo.toLocaleLowerCase()

      if(prod.categoria.indexOf( productoBuscado) >= 0 || tituloLower.indexOf( productoBuscado) >= 0 ){
        this.productosFiltrado.push(prod)
      }
    })

  }

}
