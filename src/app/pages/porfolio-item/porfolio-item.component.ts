import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { infoProducto } from './../../interfaces/infoProducto.interface';
import { ProductosService } from './../../services/productos.service';

@Component({
  selector: 'app-porfolio-item',
  templateUrl: './porfolio-item.component.html',
  styleUrls: ['./porfolio-item.component.scss']
})
export class PorfolioItemComponent implements OnInit {
  public productoInfo:infoProducto
  public idProducto: string

  constructor( private router: ActivatedRoute,
                private productoservice: ProductosService) { }

  ngOnInit() {
    this.router.params
    .subscribe( parametros =>{
      this.productoservice.getProducto(parametros['productoId']).subscribe(
        (producto: infoProducto)=>{
          this.idProducto = parametros['productoId']
          this.productoInfo = producto
        }
      )
    })
  }

}
