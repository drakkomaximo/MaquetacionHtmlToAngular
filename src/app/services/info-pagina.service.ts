import { infoPages } from './../interfaces/indo-pages.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  public info: infoPages
  public cargado: boolean = false

  constructor(private _http:HttpClient) { 

    /* console.log('Servicio de Página') */

    //Leer el archivo Json
    this._http.get('assets/data/data-pages.json').subscribe(
      (resp: infoPages)=> {
        this.cargado = true
        this.info = resp
      }
    )

  }
}
