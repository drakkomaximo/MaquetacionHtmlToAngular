import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute,
                public _productoservice: ProductosService) { }

  ngOnInit() {

    this.route.params.subscribe(
      parametros =>{
        console.log(parametros['productoBuscado'])
        this._productoservice.buscarProducto(parametros['productoBuscado'])
      }
    )

  }

}
