import { Component } from '@angular/core';
import { ProductosService } from './services/productos.service';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio';

  constructor(private _infopaginaservice: InfoPaginaService,
              private _productosservice: ProductosService){

  }
}
