import { Producto } from './../interfaces/productos.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public urlFirebase: string = "https://angular-html-andres.firebaseio.com"
  public cargado: boolean = true
  public productos: Producto

  constructor(private _http: HttpClient) { 
    this.cargarProductos()
  }

  private cargarProductos(){
    this._http.get(this.urlFirebase + '/productos_idx.json').subscribe(
      (resp: Producto)=>{
        this.productos = resp

        /* Temporizador para simular una carga de los productos */
        setTimeout(()=>{
          this.cargado = false
        }, 2000)
      }
    )
  }

}
