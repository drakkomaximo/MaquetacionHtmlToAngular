import { Equipo } from './../interfaces/equipo.interface';
import { infoPages } from './../interfaces/indo-pages.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  public info: infoPages
  public infoEquipo: Equipo
  public cargado: boolean = false
  public cargadoEquipo: boolean = false
  public urlEquipo: string = "https://angular-html-andres.firebaseio.com/equipo.json"

  constructor(private _http: HttpClient) {
    this.cargarInfo()
    this.cargarEquipo()
  }

  private cargarInfo() {
    //Leer el archivo Json
    this._http.get('assets/data/data-pages.json').subscribe(
      (resp: infoPages) => {
        this.cargado = true
        this.info = resp
        console.log(this.info)
      }
    )
  }

  private cargarEquipo(){
    this._http.get(this.urlEquipo).subscribe(
      (resp: Equipo) => {
        this.cargadoEquipo = true
        this.infoEquipo = resp
        console.log(this.infoEquipo)
      }
    )
  }
}
